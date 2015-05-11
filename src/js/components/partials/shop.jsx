import React from 'react';

export default class Shop extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.object
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginBottom: '8em'}}>
        {Object.keys(this.props.data).map((prop) => {
          return (
            <div>
              <h2>{prop}</h2>
              <p>{this.props.data[prop]}</p>
            </div>
          );
        })}
      </div>
    );
  }

}
