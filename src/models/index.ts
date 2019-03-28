import { EventEmitter2 } from 'eventemitter2'
import { CancelTokenSource } from 'axios'

// **** Definitions
/**
 * The options object for the client object
 * @typedef {Object} ApiOptions
 * @property {string} [url='http://127.0.0.1'] - The base URL of the Textile node API
 * @property {number} [port='40600'] - The port of the Textile node API
 */
export interface ApiOptions {
  url: string
  port: string
}

/**
 * Additional options to control search queries
 * @typedef {Object} QueryOptions
 * @param local Whether to only search local contacts
 * @param remote Whether to only search remote contacts
 * @param limit Stops searching after 'limit' results are found
 * @param wait Stops searching after ‘wait’ seconds have elapsed
 */
export interface QueryOptions {
  local?: boolean
  remote?: boolean
  limit?: number
  wait?: number
}

/**
 * The options object for the client object
 * @property {key} [string]
 * @property {value} [string]
 */
export interface KeyValue {
  [key: string]: string | number | boolean
}

export interface RunningEvent {
  emitter: EventEmitter2
  source: CancelTokenSource
}

/**
 * The options object for the client object
 * @property { string } cafe_version The API version of the Cafe
 * @property { string } node_version The release version of the running node
 */
export interface Versions {
  cafe_version: string
  node_version: string
}
