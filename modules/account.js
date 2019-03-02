const API = require("../core/api.js");

/**
 * Account is an API module for managing a wallet account
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
class Account extends API {
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }

  /**
   * Retrieve the local wallet account address
   *
   * @returns {Promise<string>} address
   * */
  async address() {
    const response = await this.sendGet("/api/v0/profile");
    return response.data;
  }

  /**
   * Retrieve the local wallet account seed
   *
   * @returns {Promise<string>} seed
   * */
  // eslint-disable-next-line class-methods-use-this
  async seed() {
    throw new ReferenceError("Not implemented");
  }

  /**
   * Encrypts input with account address
   *
   * @param {Buffer} input Input plaintext Buffer data
   * @returns {Promise<Buffer>} ciphertext
   * */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  async encrypt(input) {
    throw new ReferenceError("Not implemented");
  }

  /**
   * Decrypts input with account address
   *
   * @param {Buffer} input Input ciphertext Buffer data
   * @returns {Promise<Buffer>} plaintext
   * */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  async decrypt(input) {
    throw new ReferenceError("Not implemented");
  }

  /** Lists all known wallet account peers */
  async peers() {
    const response = await this.sendGet("/api/v0/account/peers");
    return response.data;
  }

  /**
   * Searches the network for wallet account thread backups
   *
   * @param {number} wait Stops searching after 'wait' seconds have elapsed (max 10s, default 2s)
   * @returns {object} { conn: Promise<any>, cancel: function }
   */
  findThreadBackups(wait) {
    const { conn, cancel } = this.sendPostCancelable(
      "/api/v0/account/backups",
      null,
      { wait }
    );
    return { conn, cancel };
  }
}

module.exports = Account;
