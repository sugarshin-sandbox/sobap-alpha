import assign from 'object-assign';

import dispatcher from '../dispatcher/dispatcher';
import {request} from '../util/api-util';
import {API_GOURMET, BASE_QUERY} from '../config/settings';
import {
  FETCH_SHOP
} from '../constants/constants';

export default {

  fetchShop: (query) => {
    let params = assign({}, BASE_QUERY, query);
    request(API_GOURMET, params).then((data) => {
      dispatcher.dispatch({
        actionType: FETCH_SHOP,
        data: data
      });
    });
  }

}
