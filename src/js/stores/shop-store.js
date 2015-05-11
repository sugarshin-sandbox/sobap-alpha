import EventEmitter from 'eventemitter3';

import dispatcher from '../dispatcher/dispatcher';
import {
  FETCH_SHOP
} from '../constants/constants';

class ShopStore extends EventEmitter {

  constructor() {
    super();
    this._shops = [];
    dispatcher.register(this.handler.bind(this));
  }

  getShops() {
    return this._shops;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.off('change', callback);
  }

  _fetchShop(shops) {
    this._shops = shops;
  }

  handler(action) {
    switch (action.actionType) {
      case FETCH_SHOP:
        this._fetchShop(action.data.results.shop);
        this.emitChange();
        break;

      default:
    }
  }

}

export default new ShopStore
