const API = require("../core/api.js");

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
   * @param {string} id ID of the target schema
   */
  async get(id) {
    const response = await this.sendGet(`/api/v0/files/${id}`);
    return response.data;
  }

  /**
   * Retrieves a list of comments on a target block
   *
   * @param {string} block ID of the target block
   */
  async list(block) {
    const response = await this.sendGet(`/api/v0/blocks/${block}/comments`);
    return response.data;
  }

  /**
   * Ignores a block comment by its ID
   *
   * This adds an "ignore" thread block targeted at the comment.
   * Ignored blocks are by default not returned when listing.
   *
   * @param {string} id ID of the comment
   */
  async ignore(id) {
    this.sendDelete(`/api/v0/blocks/${id}`);
  }
}

module.exports = Schemas;
