import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const Items = props => (
  <div className="card-columns">
    <Item addRating={props.addRating} state={props.state} />
  </div>
);
export default Items;

Items.propTypes = {
  addRating: PropTypes.func,
  state: PropTypes.object,
};

Items.defaultProps = {
  state: {},
  addRating: () => {},
};
