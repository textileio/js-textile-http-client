const { exec } = require("child_process");
const API = require("../core/api.js");

/**
 * File is an API module for managing Textile files
 *
 * @param {ApiOptions} API options object
 * @extends {API}
 */
class File extends API {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.binPath = opts.binPath || "textile";
  }

  /**
   * Add a file local to the Textile node into the node.
   * NOTE: Files API does not currently have options for adding; so we are
   * falling back to the CLI for the time being.
   *
   * @param {string} path File path to add
   * @param {object} [options] Additional options to pass in as headers
   * @param {string} [options.thread] Thread ID of which to add the file
   * @param {string} [options.caption] Caption to add to the file object
   * @param {string} [options.group] Group of which to add the file object
   */
  async add(path, options) {
    const opts = options || {};
    let cmd = `${this.binPath} add `;
    if (opts.thread) {
      cmd += `--thread="${opts.thread}" `;
    }
    if (opts.caption) {
      cmd += `--caption="${opts.caption}" `;
    }
    if (opts.group) {
      cmd += `--group=${opts.group} `;
    }
    cmd += ` "${path}"`;

    return new Promise(function onPromise(resolve) {
      exec(cmd, resolve);
      // TODO This doesn't return the right stuff. Possibly call the api
      // afterwards to get the ID
    });
  }
}

module.exports = File;
