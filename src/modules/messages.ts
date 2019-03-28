import { API } from '../core/api'
import { KeyValue, ApiOptions } from '../models/index'
import { Text, TextList, Block } from '@textile/go-mobile'

/**
 * Messages is an API module for managing thread/block messages
 *
 * Messages are added as blocks in a thread
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
export default class Messages extends API {
  opts: ApiOptions
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
  }

  /**
   * Adds a message to a thread
   *
   * @param thread Thread ID
   * @param body Message body
   * @returns The generated message block
   */
  async add(thread: string, body: string) {
    const response = await this.sendPost(`/api/v0/threads/${thread}/messages`, [
      encodeURI(body)
    ])
    return Text.fromObject(response.data)
  }

  /**
   * Retrieves a message by block ID
   *
   * @param id ID of the target message
   * @returns The target message block
   */
  async get(id: string) {
    const response = await this.sendGet(`/api/v0/messages/${id}`)
    return Text.fromObject(response.data)
  }

  /**
   * Retrieves thread messages
   *
   * @param {Object} [options] Options to send as headers
   * @param {string} [options.thread] Thread ID (can also use ‘default’)
   * @param {string} [options.offset] Offset ID to start listing from (omit for latest)
   * @param {string} [options.limit] List page size (default: 5)
   * @returns An array of message blocks
   */
  async list(options: KeyValue) {
    const response = await this.sendGet('/api/v0/messages', undefined, options)
    return TextList.fromObject(response.data)
  }

  /**
   * Ignores a thread message by its ID
   *
   * This adds an 'ignore' thread block targeted at the comment.
   * Ignored blocks are by default not returned when listing.
   *
   * @param id ID of the message
   * @returns The added ignore block
   */
  async ignore(id: string) {
    const response = await this.sendDelete(`/api/v0/blocks/${id}`)
    return Block.fromObject(response.data)
  }
}
