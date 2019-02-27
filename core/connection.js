const axios = require("axios");

/**
 * The connection module contains utilities for creating connections to a Textile node
 */
class Connection {
  /**
   * get() coerces the given options into a connection
   */
  static get(options) {
    const opts = Connection.cleanOpts(options);

    return axios.create({
      baseURL: `${opts.url}:${opts.port}` // TODO this is flaky
    });
  }

  static cleanOpts(options) {
    const opts = options || {};
    opts.url = opts.url || "http://127.0.0.1";
    opts.port = opts.port || 40600;
    return opts;
  }
}

module.exports = Connection;
