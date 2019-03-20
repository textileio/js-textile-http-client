import { API } from '../core/api'
import { ApiOptions } from '../models'

/**
 * Likes is an API module for managing thread/block likes
 *
 * Likes are added as blocks in a thread, which target another block, usually a file(s).
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
export default class Likes extends API {
  opts: ApiOptions
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
  }

  /**
   * Adds a like to a block
   *
   * @param {string} block Target block ID. Usually a file(s) block.
   */
  async add(block: string) {
    const response = await this.sendPost(`/api/v0/blocks/${block}/likes`)
    return response.data
  }

  /**
   * Retrieves a like by ID
   *
   * @param {string} id ID of the target like
   */
  async get(id: string) {
    const response = await this.sendGet(`/api/v0/blocks/${id}/like`)
    return response.data
  }

  /**
   * Retrieves a list of likes on a target block
   *
   * @param {string} block ID of the target block
   */
  async list(block: string) {
    const response = await this.sendGet(`/api/v0/blocks/${block}/likes`)
    return response.data
  }

  /**
   * Ignores a block like by its ID
   *
   * This adds an 'ignore' thread block targeted at the like.
   * Ignored blocks are by default not returned when listing.
   *
   * @param {string} id ID of the like
   */
  async ignore(id: string) {
    this.sendDelete(`/api/v0/blocks/${id}`)
  }
}
