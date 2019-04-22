import React from 'react';
import Item from './Item';

class Items extends React.Component {
  componentDidMount() {
    this.props.initializationItems();
  }

  render() {
    return (
      <div className="card-columns">
        <Item addRating={this.props.addRating} state={this.props.state} />
      </div>
    );
  }
}
export default Items;
