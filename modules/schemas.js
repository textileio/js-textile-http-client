const { API } = require("../core/api.js");

/**
 * Schemas is an API module for managing Textile schemas
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
class Schemas extends API {
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }

  /** Default Textile schemas */
  static get default() {
    return {
      media: {
        id: "QmX3ugbr1i4hxJYLpJtMNpgyNG4FaF7hhmNNvX8ahSeXGH",
        name: "media",
        pin: true,
        plaintext: false
      },
      camera_roll: {
        id: "----",
        name: "camera_roll",
        pin: true,
        plaintext: false
      },
      avatar: {
        id: "----",
        name: "avatar",
        pin: true,
        plaintext: false
      }
    };
  }

  /**
   * Creates and validates a new schema from input JSON
   *
   * @param {object} schema Input JSON-based thread schema
   */
  async add(schema) {
    const response = await this.sendPost(
      `/api/v0/mills/schema`,
      null,
      null,
      schema,
      { "Content-Type": "application/json" }
    );
    return response.data;
  }

  /**
   * Retrieves a schema by ID
   *
   * @param {string} thread ID of the thread
   */
  async get(thread) {
    const response = await this.sendGet(`/api/v0/threads/${thread}`);
    return response.data.schema_node;
  }
}

module.exports = { Schemas };
