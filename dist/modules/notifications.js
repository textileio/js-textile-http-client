"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../core/api");
/**
 * Notifications is an API module for managing notifications
 *
 * Notifications are generated by thread and account activity.
 *
 * @param {ApiOptions} opts API options object
 * @extends API
 */
class Notifications extends api_1.API {
    constructor(opts) {
        super(opts);
        this.opts = opts;
    }
    /** Retrieves all notifications generated by thread and account activity */
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sendGet('/api/v0/notifications');
            return response.data;
        });
    }
    /**
     * Marks a notifiction as read by ID
     *
     * @param {string} id ID of the target notification
     */
    markRead(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.sendGet(`/api/v0/notifications/${id}/read`);
        });
    }
    /** Marks all notifictions as read */
    markAllRead() {
        return __awaiter(this, void 0, void 0, function* () {
            this.markRead('all');
        });
    }
}
exports.default = Notifications;
