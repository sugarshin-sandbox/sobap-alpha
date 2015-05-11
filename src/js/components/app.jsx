import React from 'react';

import Shops from './partials/shops';

import actions from '../actions/actions';
import store from '../stores/shop-store';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shops: store.getShops()
    }
  }

  _changeShops() {
    this.setState({
      shops: store.getShops()
    })
  }

  componentDidMount() {
    store.addChangeListener(this._changeShops.bind(this));
    actions.fetchShop({
      keyword: '世田谷',
      type: 'lite'
    });
  }

  componentWillUnmount() {
    store.removeChangeListener(this._changeShops.bind(this));
  }

  render() {
    return (
      <div className="app">
        <Shops shops={this.state.shops} />
      </div>
    );
  }

}
