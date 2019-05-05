import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.state.items !== nextState.items) {
      return true;
    }
    return false;
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

Items.propTypes = {
  addRating: PropTypes.func,
  state: PropTypes.shape({
    item: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
  }),
};

Items.defaultProps = {
  state: {},
  addRating: () => {},
};
