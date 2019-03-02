const API = require("../core/api.js");

/**
 * Notifications is an API module for managing notifications
 *
 * Notifications are generated by thread and account activity.
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
class Notifications extends API {
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }

  /** Retrieves all notifications generated by thread and account activity */
  async list() {
    const response = await this.sendGet("/api/v0/notifications");
    return response.data;
  }

  /**
   * Marks a notifiction as read by ID
   *
   * @param {string} id ID of the target notification
   */
  async markRead(id) {
    this.sendGet(`/api/v0/notifications/${id}/read`);
  }

  /** Marks all notifictions as read */
  async markAllRead() {
    this.markRead("all");
  }
}

module.exports = Notifications;
