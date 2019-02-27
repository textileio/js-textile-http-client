const API = require("../core/api.js");

/**
 * Peer is an API module for getting basic information about a Textile node
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
class Peer extends API {
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }

  /** Retrieve the peer ID of the Textile node */
  async get() {
    return this.sendGet("/api/v0/peer");
  }

  /** Retrieves the address of the Textile node */
  async address() {
    return this.sendGet("/api/v0/address"); // TODO filter result
  }

  /** Pings the textile node */
  async ping() {
    return this.sendGet("/api/v0/ping"); // TODO This just fails?
  }
}

module.exports = Peer;
