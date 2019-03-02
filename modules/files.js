// const { exec } = require("child_process");
const { EventEmitter2 } = require("eventemitter2");
const FormData = require("form-data");
const API = require("../core/api.js");
const Mill = require("./mills");
const SchemaMiller = require("../helpers/schema-miller");

/**
 * Files is an API module for managing Textile files
 *
 * @param {ApiOptions} API options object
 * @extends {API}
 */
class Files extends API {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.events = new EventEmitter2();
    this.mill = new Mill(opts);
  }

  /**
   * Get a paginated array of files.
   *
   * @param {object} [options] Options for pagination and filtering
   * @param {string} [options.thread] Limit to this thread ID
   * @param {string} [options.offset] Offset ID to start listing from. Omit for latest
   * @param {number} [options.limit=5] List page size
   */
  async get(options) {
    const { data } = await this.sendGet("api/v0/files", [], options);
    return data;
  }

  /**
   * Add a file to a thread in your Textile node
   *
   * @param {string} threadId Id of the thread
   * @param {object} fileStream Nodejs file stream
   * @param {string} fileName Name of the file in the stream
   * @param {object} options Options object
   * @param {string} options.schema Id of the schema to use for the mill
   * @param {string} options.caption Caption to add to the image
   */
  async addFileStream(threadId, fileStream, fileName, options) {
    const form = new FormData();
    form.append("file", fileStream, fileName);

    const headers = form.getHeaders();

    return this.addFile(threadId, form, options, headers);
  }

  /**
   * Add a file to a thread in your Textile node
   *
   * @param {string} threadId Id of the thread
   * @param {File} file FormData object
   * @param {object} options Options object
   * @param {string} options.schema Schema object to use for the mill
   * @param {string} options.caption Caption to add to the image
   * @param {object} [headers] Extra headers to send in the request
   */
  async addFile(threadId, file, options, headers) {
    if (!threadId) {
      throw new Error(
        "'threadId' must be provided when adding files to a thread"
      );
    }

    // Make sure we have a schema
    const opts = options || {};
    if (!opts.schema) {
      opts.schema = (await this.getById(threadId)).schema;
    }

    // Mill the file before adding it
    const milled = await SchemaMiller.mill(
      file,
      opts.schema.links,
      async link => {
        const { data: res } = await this.mill.run(
          link.mill,
          link.opts,
          file,
          headers
        );
        res.name = link.name;
        return res;
      }
    );

    const resp = await this.sendPost(
      `api/v0/threads/${threadId}/files`,
      [],
      opts,
      [milled]
    );
    return resp.data;
  }
}

module.exports = Files;
