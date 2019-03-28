import { EventEmitter2 } from 'eventemitter2'
import axios, { AxiosResponse } from 'axios'
import { API } from '../core/api'
import { ApiOptions, RunningEvent } from '../models/index'
import { QueryResult, Thread } from '@textile/go-mobile'

/**
 * Snapshots is an API module for managing thread snapshots
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
export default class Snapshots extends API {
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
  }

  /**
   * Snapshot all threads and push to registered cafes
   *
   * @returns Whether the snapshot process was successfull
   */
  async create() {
    const response = await this.sendPost('/api/v0/snapshots')
    return response.status === 201
  }

  /**
   * Search the network for thread snapshots
   *
   * Returns streaming connection and a cancel function to cancel the request.
   *
   * @param wait Stops searching after 'wait' seconds have elapsed (max 30 default 2)
   * @returns Event emitter with found, done, error events on textile.snapshots.
   * The Event emitter has an additional cancel method that can be used to cancel the search.
   */
  search(wait?: number) {
    const { conn, source } = this.sendPostCancelable(
      '/api/v0/snapshots/search',
      undefined,
      { wait: (wait || 2).toString() }
    )
    const emitter = new EventEmitter2({
      wildcard: true
    })
    conn
      .then((response: AxiosResponse) => {
        const stream = response.data
        stream.on('data', (chunk: object) => {
          const result = QueryResult.fromObject(chunk)
          const snap = Thread.fromObject(result.value)
          emitter.emit('textile.snapshots.found', snap)
        })
        stream.on('end', () => {
          emitter.emit('textile.snapshots.done', false)
        })
      })
      .catch((err: Error) => {
        if (axios.isCancel(err)) {
          emitter.emit('textile.snapshots.done', true)
        } else {
          emitter.emit('textile.snapshots.error', err)
        }
      })
    return { emitter, source } as RunningEvent
  }

  /**
   * Apply a single thread snapshot
   * @param id The snapshot id
   * @param wait Stops searching after 'wait' seconds have elapsed (max 30 default 2)
   * @returns Event emitter with found, applied, done, error events on textile.snapshots.
   * The Event emitter has an additional cancel method that can be used to cancel the search.
   */
  apply(id: string, wait?: number) {
    const { emitter, source } = this.search(wait)
    const other = new EventEmitter2({
      wildcard: true
    })
    emitter.on('textile.snapshots.found', (found: object) => {
      const snapshot = QueryResult.fromObject(found)
      if (snapshot.id === id) {
        this.applySnapshot(snapshot).then((success: boolean) => {
          other.emit('textile.snapshots.applied', success)
        })
      }
    })
    return { emitter, source } as RunningEvent
  }

  async applySnapshot(snapshot: QueryResult) {
    const snap = Thread.fromObject(snapshot.value)
    const response = await this.sendPut(`/api/v0/threads/${snap.id}`,
      undefined, undefined, snap.toJSON())
    return response.status === 204
  }
}
