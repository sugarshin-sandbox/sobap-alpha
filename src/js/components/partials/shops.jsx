import React from 'react';

import Shop from './shop';

export default class Shops extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.shops.map((shop) => {
          return <Shop data={shop} />
        })}
      </div>
    );
  }

}
