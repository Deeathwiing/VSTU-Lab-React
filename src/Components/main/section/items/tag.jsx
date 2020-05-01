/* eslint-disable no-underscore-dangle */
import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  render() {
    const item = this.state.map(element => (
      <span onClick={this.props.searchByTag} value={element.id}>
        #{`${element.text} `}
      </span>
    ));

    return item;
  }
}

export default Tag;
