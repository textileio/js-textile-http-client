import { EventEmitter2 } from 'eventemitter2'
import axios, { AxiosResponse } from 'axios'
import { API } from '../core/api'
import { ApiOptions } from '../models/index'
import { Contact, QueryResult, Thread } from '@textile/go-mobile'
import Snapshots from './snapshots'

/**
 * Account is an API module for managing a wallet account
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
export default class Account extends API {
  opts: ApiOptions
  private snapshots: Snapshots
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
    this.snapshots = new Snapshots(opts)
  }

  /**
   * Retrieve the local wallet account address
   *
   * @returns The current wallet account's address
   */
  async address() {
    const response = await this.sendGet('/api/v0/account/address')
    return response.data as string
  }

  /**
   * Retrieve the local wallet account seed
   *
   * @returns The current wallet account's seed
   */
  async seed() {
    const response = await this.sendGet('/api/v0/account/seed')
    return response.data as string
  }

  /**
   * Retrieve the local wallet account's own contact info
   *
   * @returns The current wallet account's contact info
   */
  async contact() {
    const response = await this.sendGet('/api/v0/account/contact')
    return Contact.fromObject(response.data)
  }

  /**
   * Syncs the local wallet account with all thread snapshots found on the network
   *
   * @param apply Whether to apply the discovered thread snapshots as they are found (default false)
   * @param wait Stops searching after 'wait' seconds have elapsed (max 30 default 2)
   * @returns Whether the sync was successfull
   */
  async sync(apply?: boolean, wait?: number) {
    const { emitter } = this.snapshots.search(wait)
    emitter.on('textile.snapshots.found', (found: object) => {
      const snapshot = QueryResult.fromObject(found)
      if (!snapshot.local && apply) {
        this.snapshots.applySnapshot(snapshot)
          .then((success: boolean) => {
            if (!success) {
              return false
            }
          })
      }
    })
    emitter.on('textile.snapshots.done', () => {
      this.snapshots.create()
        .then((success: boolean) => {
          if (!success) {
            return false
          }
          return true
        })
    })
  }
}
