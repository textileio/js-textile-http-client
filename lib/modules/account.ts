import { EventEmitter2 } from 'eventemitter2'
import axios, { AxiosResponse } from 'axios'
import { API } from '../core/api'
import { ApiOptions } from '../models/index'

/**
 * Account is an API module for managing a wallet account
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
export default class Account extends API {
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
  }

  /**
   * Retrieve the local wallet account address
   *
   * @returns {Promise<string>} address
   */
  async address() {
    const response = await this.sendGet('/api/v0/account/address')
    return response.data
  }

  /**
   * Retrieve the local wallet account seed
   *
   * @returns {Promise<string>} seed
   */
  // eslint-disable-next-line class-methods-use-this
  async seed() {
    throw new ReferenceError('Not implemented')
  }

  /**
   * Encrypts input with account address
   *
   * @param {Buffer} input Input plaintext Buffer data
   * @returns {Promise<Buffer>} ciphertext
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  async encrypt(input: Buffer) {
    throw new ReferenceError('Not implemented')
  }

  /**
   * Decrypts input with account address
   *
   * @param {Buffer} input Input ciphertext Buffer data
   * @returns {Promise<Buffer>} plaintext
   */
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  async decrypt(input: Buffer) {
    throw new ReferenceError('Not implemented')
  }

  /** Lists all known wallet account peers */
  async peers() {
    const response = await this.sendGet('/api/v0/account/peers')
    return response.data
  }

  /**
   * Searches the network for wallet account thread backups
   *
   * Returns streaming connection and a cancel function to cancel the request.
   *
   * @param {number} wait Stops searching after 'wait' seconds have elapsed (max 10s, default 2s)
   * @returns {EventEmitter2} Event emitter with found, done, error events on textile.backups.
   * The Event emitter has an additional cancel method that can be used to cancel the search.
   * @example
   * const backups = textile.account.findThreadBackups()
   * setTimeout(() => backups.cancel(), 1000) // cancel after 1 second
   * backups.on('textile.backups.found', found => {
   *   console.log(found)
   * })
   * backups.on('*.done', cancelled => {
   *   console.log(`search was ${cancelled ? 'cancelled' : 'completed'}`)
   * })
   */
  findThreadBackups(wait: number) {
    const { conn, source } = this.sendPostCancelable(
      '/api/v0/account/backups',
      undefined,
      { wait }
    )
    const emitter = new EventEmitter2({
      wildcard: true
    })
    conn
    // TODO: Is that right type?
      .then((response: AxiosResponse) => {
        const stream = response.data
        // TODO: Is that right type?
        stream.on('data', (chunk: string) => {
          emitter.emit('textile.backups.data', chunk)
        })
        stream.on('end', () => {
          emitter.emit('textile.backups.done', false)
        })
      })
      .catch((err: Error) => {
        if (axios.isCancel(err)) {
          emitter.emit('textile.backups.done', true)
        } else {
          emitter.emit('textile.backups.error', err)
        }
      })
    return {emitter, source}
  }
}
