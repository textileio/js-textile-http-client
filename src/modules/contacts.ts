import { EventEmitter2 } from 'eventemitter2'
import axios, { AxiosResponse } from 'axios'
import { API } from '../core/api'
import { ApiOptions, RunningEvent, KeyValue, QueryOptions } from '../models/index'
import { Contact, ContactList, IContact } from '@textile/go-mobile'

/**
 * Contacts is an API module for managing local contacts and finding contacts on the network
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
export default class Contacts extends API {
  opts: ApiOptions
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
  }

  /**
   * Adds or updates a contact directly, usually from a search
   *
   * @param contact JSON object representing a contact
   * @returns Whether the operation was sucessfull
   */
  async add(address: string, contact: IContact) {
    const response = await this.sendPut(
      `/api/v0/contacts/${address}`,
      undefined,
      undefined,
      contact
    )
    return response.status === 204
  }

  /**
   * Retrieve information about a known contact
   *
   * @param address Address of the contact
   * @returns The associated contact object
   */
  async get(address: string) {
    const response = await this.sendGet(`/api/v0/contacts/${address}`)
    return Contact.fromObject(response.data)
  }

  /**
   * Retrieves a list of known contacts
   * @returns An array of all known contacts
   */
  async list() {
    const response = await this.sendGet('/api/v0/contacts')
    return ContactList.fromObject(response.data)
  }

  /**
   * Remove a known contact
   *
   * @param address Address of the contact
   * @returns Whether the operation was successfull
   */
  async remove(contactId: string) {
    const response = await this.sendDelete(`/api/v0/contacts/${contactId}`)
    return response.status === 204
  }

  /**
   * Searches locally and on the network for contacts by username, peer id, or address
   *
   * @param username Search by username string
   * @param address Search by account address string
   * @param options Additional options to control the query
   * @returns Event emitter with found, done, error events on textile.contacts.
   * @example
   * const backups = textile.account.search({wait: 5})
   * setTimeout(() => backups.source.cancel(), 1000) // cancel after 1 second
   * backups.on('textile.contacts.found', found => {
   *   console.log(found)
   * })
   * backups.on('*.done', cancelled => {
   *   console.log(`search was ${cancelled ? 'cancelled' : 'completed'}`)
   * })
   */
  search(username?: string, address?: string, options?: QueryOptions) {
    const opts = options || {}
    const allOpts: KeyValue = {
      username: username || '',
      address: address || '',
      local: (opts.local || false).toString(),
      remote: (opts.remote || false).toString(),
      limit: (opts.limit || 5).toString(),
      wait: (opts.wait || 2).toString()
    }
    const { conn, source } = this.sendPostCancelable('/api/v0/contacts/search', undefined, allOpts)
    const emitter = new EventEmitter2({
      wildcard: true
    })
    conn
      .then((response: AxiosResponse) => {
        const stream = response.data
        stream.on('data', (chunk: object) => {
          const contact = Contact.fromObject(chunk)
          emitter.emit('textile.contacts.found', contact)
        })
        stream.on('end', () => {
          emitter.emit('textile.contacts.done', false)
        })
      })
      .catch((err: Error) => {
        if (axios.isCancel(err)) {
          emitter.emit('textile.contacts.done', true)
        } else {
          emitter.emit('textile.contacts.error', err)
        }
      })
    return  { emitter, source } as RunningEvent
  }
}
