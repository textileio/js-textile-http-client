import { API } from '../core/api'
import { ApiOptions } from '../models'

/**
 * Logs is an API module for managing the verbosity of one or all subsystems logs
 *
 * Textile logs piggyback on the IPFS event logs
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
export default class Logs extends API {
  opts: ApiOptions
  constructor(opts: ApiOptions) {
    super(opts)
    this.opts = opts
  }

  /**
   * List the verbosity of one or all subsystems logs
   *
   * @param subsystem Subsystem logging identifier (omit for all)
   * @param tex Whether to list only Textile subsystems, or all available subsystems
   * @returns An object of (current) key- (subsystem) value (level) pairs
   */
  async get(subsystem?: string, tex?: boolean) {
    const response = await this.sendGet(
      `api/v0/logs${subsystem ? `/${subsystem}` : ''}`,
      undefined,
      { 'tex-only': tex || false }
    )
    return response.data as { [k: string]: string }
  }

  /**
   * Set the verbosity of one or all subsystems logs
   *
   * @param level Log level, must be one of: debug, info, warning, error, or critical.
   * @param subsystem Subsystem logging identifier (omit for all)
   * @param tex Whether to change only Textile subsystems, or all available subsystems
   * @returns An object of (updated) key- (subsystem) value (level) pairs
   */
  async set(level: string, subsystem?: string, tex?: boolean) {
    const response = await this.sendPost(
      `api/v0/logs${subsystem ? `/${subsystem}` : ''}`,
      undefined,
      { level, 'tex-only': tex || false }
    )
    return response.data
  }
}
