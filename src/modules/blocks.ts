import { API } from '../core/api'
import { ApiOptions, Node, FilesList, Files as File, Keys, DirectoryList, Block } from '../models'
import SchemaMiller, { MillOpts } from '../helpers/schema-miller'
import Mills from './mills'
import Threads from './threads'

/**
 * Blocks is an API module for managing Textile blocks
 *
 * @param {ApiOptions} API options object
 * @extends {API}
 */
export default class Blocks extends API {
  opts: ApiOptions
  threads: Threads
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
    this.threads = new Threads(opts)
  }

  /**
   * Retrieves a block by ID
   *
   * @param id ID of the target block
   * @returns The thread object
   */
  async get(id: string) {
    const response = await this.sendGet(`blocks/${id}`)
    return response.json() as Promise<Block>
  }

  /**
   * Remove a thread block by ID
   *
   * @param id ID of the block
   * @returns Whether or not the operation was successful
   */
  async remove(id: string) {
    const response = await this.sendDelete(`blocks/${id}`)
    return response.status === 204
  }
}
