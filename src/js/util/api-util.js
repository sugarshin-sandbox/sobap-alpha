import Promise from 'bluebird';
import jsonp from 'jsonp';
import qs from 'qs';

export default {

  request: (url, query) => {
    return new Promise((resolve, reject) => {
      jsonp(url, {
        param: qs.stringify(query, {arrayFormat: 'repeat'}) + '&callback'
      }, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

}
