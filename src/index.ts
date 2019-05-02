import Account from './modules/account'
import Blocks from './modules/blocks'
import Cafes from './modules/cafes'
import Config from './modules/config'
import Comments from './modules/comments'
import Contacts from './modules/contacts'
import Feed from './modules/feed'
import File from './modules/file'
import Files from './modules/files'
import Invites from './modules/invites'
import IPFS from './modules/ipfs'
import Likes from './modules/likes'
import Logs from './modules/logs'
import Messages from './modules/messages'
import Notifications from './modules/notifications'
import Profile from './modules/profile'
import Schemas from './modules/schemas'
import Subscribe from './modules/subscribe'
import Threads from './modules/threads'
import Tokens from './modules/tokens'
import Utils from './modules/utils'
import { ApiOptions, TextileOptions } from './models'
export { default as Wallet } from './modules/wallet'
export * from './models'

/**
 * Textile is the main client class
 *
 */
export class Textile {
  opts: ApiOptions = {
    url: '127.0.0.1',
    port: 40600,
    version: 0
  }
  /** @property {Account} account - Manage Textile wallet account */
  account: Account = new Account(this.opts)
  /** @property {Blocks} blocks - Manage Textile Blocks */
  blocks: Blocks = new Blocks(this.opts)
  /** @property {Cafes} account - Manage Textile Cafes */
  cafes: Cafes = new Cafes(this.opts)
  /** @property {Config} config - Manage Textile Config settings */
  config: Config = new Config(this.opts)
  /** @property {Comments} comments - Manage Textile block Comments */
  comments: Comments = new Comments(this.opts)
  /** @property {Contacts} contacts - Manage Textile peer Contacts */
  contacts: Contacts = new Contacts(this.opts)
  /** @property {Feed} feed - Manage the Textile Feed */
  feed: Feed = new Feed(this.opts)
  /** @property {File} file - Manage a Textile File */
  file: File = new File(this.opts)
  /** @property {Files} files - Manage Textile Files */
  files: Files = new Files(this.opts)
  /** @property {Invites} invites - Manage Textile Invites */
  invites: Invites = new Invites(this.opts)
  /** @property {IPFS} ipfs - Manage the underlying IPFS peer */
  ipfs: IPFS = new IPFS(this.opts)
  /** @property {Likes} likes - Manage Textile block Likes */
  likes: Likes = new Likes(this.opts)
  /** @property {Logs} logs - Manage Textile subsystem logs */
  logs: Logs = new Logs(this.opts)
  /** @property {Messages} messages - Manage Textile thread Messages */
  messages: Messages = new Messages(this.opts)
  /** @property {Notifications} notifications - Manage Textile Notifications */
  notifications: Notifications = new Notifications(this.opts)
  /** @property {Profile} profile - Manage a Textile node's public profile */
  profile: Profile = new Profile(this.opts)
  /** @property {Schemas} schemas - Manage Textile Schemas */
  schemas: Schemas = new Schemas(this.opts)
  /** @property {Subscribe} subscribe - Subscribe to thread updates */
  subscribe: Subscribe = new Subscribe(this.opts)
  /** @property {Threads} threads - Manage Textile Threads */
  threads: Threads = new Threads(this.opts)
  /** @property {Tokens} tokens - Manage Textile Threads */
  tokens: Tokens = new Tokens(this.opts)
  /** @property {Utils} utils - Get information about the Textile node */
  utils: Utils = new Utils(this.opts)

/**
 * Textile is the main client class
 *
 * @param {TextileOptions} options The Textile options object
 */
  setOptions(options?: TextileOptions) {
    this.opts = {
      ...this.opts,
      ...options
    }
    this.account = new Account(this.opts)
    this.blocks = new Blocks(this.opts)
    this.cafes = new Cafes(this.opts)
    this.config = new Config(this.opts)
    this.comments = new Comments(this.opts)
    this.contacts = new Contacts(this.opts)
    this.feed = new Feed(this.opts)
    this.file = new File(this.opts)
    this.files = new Files(this.opts)
    this.invites = new Invites(this.opts)
    this.ipfs = new IPFS(this.opts)
    this.likes = new Likes(this.opts)
    this.logs = new Logs(this.opts)
    this.messages = new Messages(this.opts)
    this.notifications = new Notifications(this.opts)
    this.profile = new Profile(this.opts)
    this.schemas = new Schemas(this.opts)
    this.subscribe = new Subscribe(this.opts)
    this.threads = new Threads(this.opts)
    this.tokens = new Tokens(this.opts)
    this.utils = new Utils(this.opts)
  }
}

export default new Textile()
