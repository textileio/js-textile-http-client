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
import { TextileOptions } from './models'
import { DEFAULT_API_OPTIONS as defaults } from './core/api'
export { default as Wallet } from './modules/wallet'
export * from './models'

/**
 * Textile is the main client class
 *
 */
export class Textile {
  /** @property {Account} account - Manage Textile wallet account */
  account: Account = new Account(defaults)
  /** @property {Blocks} blocks - Manage Textile Blocks */
  blocks: Blocks = new Blocks(defaults)
  /** @property {Cafes} account - Manage Textile Cafes */
  cafes: Cafes = new Cafes(defaults)
  /** @property {Config} config - Manage Textile Config settings */
  config: Config = new Config(defaults)
  /** @property {Comments} comments - Manage Textile block Comments */
  comments: Comments = new Comments(defaults)
  /** @property {Contacts} contacts - Manage Textile peer Contacts */
  contacts: Contacts = new Contacts(defaults)
  /** @property {Feed} feed - Manage the Textile Feed */
  feed: Feed = new Feed(defaults)
  /** @property {File} file - Manage a Textile File */
  file: File = new File(defaults)
  /** @property {Files} files - Manage Textile Files */
  files: Files = new Files(defaults)
  /** @property {Invites} invites - Manage Textile Invites */
  invites: Invites = new Invites(defaults)
  /** @property {IPFS} ipfs - Manage the underlying IPFS peer */
  ipfs: IPFS = new IPFS(defaults)
  /** @property {Likes} likes - Manage Textile block Likes */
  likes: Likes = new Likes(defaults)
  /** @property {Logs} logs - Manage Textile subsystem logs */
  logs: Logs = new Logs(defaults)
  /** @property {Messages} messages - Manage Textile thread Messages */
  messages: Messages = new Messages(defaults)
  /** @property {Notifications} notifications - Manage Textile Notifications */
  notifications: Notifications = new Notifications(defaults)
  /** @property {Profile} profile - Manage a Textile node's public profile */
  profile: Profile = new Profile(defaults)
  /** @property {Schemas} schemas - Manage Textile Schemas */
  schemas: Schemas = new Schemas(defaults)
  /** @property {Subscribe} subscribe - Subscribe to thread updates */
  subscribe: Subscribe = new Subscribe(defaults)
  /** @property {Threads} threads - Manage Textile Threads */
  threads: Threads = new Threads(defaults)
  /** @property {Tokens} tokens - Manage Textile Threads */
  tokens: Tokens = new Tokens(defaults)
  /** @property {Utils} utils - Get information about the Textile node */
  utils: Utils = new Utils(defaults)

/**
 * Textile is the main client class
 *
 * @param {TextileDEFAULT_OPTIONS} DEFAULT_OPTIONS The Textile DEFAULT_OPTIONS object
 */
  setOptions(options: TextileOptions) {
    const newOptions = defaults
    if (options.port !== undefined) {
      newOptions.port = options.port
    }
    if (options.url !== undefined) {
      newOptions.url = options.url
    }
    if (options.version !== undefined) {
      newOptions.version = options.version
    }
    // These are all API extensions, so just update their ApiDEFAULT_OPTIONS
    this.account = new Account(newOptions)
    this.blocks = new Blocks(newOptions)
    this.cafes = new Cafes(newOptions)
    this.config = new Config(newOptions)
    this.comments = new Comments(newOptions)
    this.contacts = new Contacts(newOptions)
    this.feed = new Feed(newOptions)
    this.file = new File(newOptions)
    this.files = new Files(newOptions)
    this.invites = new Invites(newOptions)
    this.ipfs = new IPFS(newOptions)
    this.likes = new Likes(newOptions)
    this.logs = new Logs(newOptions)
    this.messages = new Messages(newOptions)
    this.notifications = new Notifications(newOptions)
    this.profile = new Profile(newOptions)
    this.schemas = new Schemas(newOptions)
    this.subscribe = new Subscribe(newOptions)
    this.threads = new Threads(newOptions)
    this.tokens = new Tokens(newOptions)
    this.utils = new Utils(newOptions)
  }
}

export default new Textile()
