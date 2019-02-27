// Main modules
const Peer = require("./modules/peer");
// const Profile = require('./modules/profile'),
// const Mills = require('./modules/mills'),
const Schema = require("./modules/schema");
const Thread = require("./modules/thread");
const Block = require("./modules/block");
// const Messages = require('./modules/messages'),
const File = require("./modules/file");
// const Keys = require('./modules/keys'),
// const Sub = require('./modules/sub'),
// const Invites = require('./modules/invites'),
// const Notifications = require('./modules/notifications'),
// const Cafes = require('./modules/cafes'),
// const Swarm = require('./modules/swarm'),
// const Contacts = require('./modules/contacts'),
// const IPFS = require('./modules/ipfs'),
// const Confg = require('./modules/config'),

// **** Definitions
/**
 * The options object for the client object
 * @typedef {Object} ApiOptions
 * @property {string} [url="http://127.0.0.1"] - The base URL of the Textile node API
 * @property {number} [port=40600] - The port of the Textile node API
 * @property {string} [binPath="textile"] - The path to the local Textile binary
 */

/**
 * Textile is the main client class
 *
 * @param {ApiOptions} options The API options object
 */
class Textile {
  constructor(options) {
    this.opts = options || {};

    /** @property {Peer} peer - Manage Textile node information */
    this.peer = new Peer(this.opts);
    /** @property {Schema} schema - Manage Textile schema definitions */
    this.schema = new Schema(this.opts);
    /** @property {Thread} thread - Manage Textile thread objects */
    this.thread = new Thread(this.opts);
    /** @property {Block} block - Manage Textile block objects */
    this.block = new Block(this.opts);
    /** @property {File} file - Manage existing files in a Textile node */
    this.file = new File(this.opts);
  }
}

module.exports = Textile;
