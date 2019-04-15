import React from 'react';
import Item from './Item';

const Items = props => (
  <div className="card-columns">
    <Item addRating={props.addRating} state={props.state} />
  </div>
);

export default Items;
