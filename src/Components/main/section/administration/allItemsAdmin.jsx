import React from 'react';
import PropTypes from 'prop-types';

const AllItemsAdmin = props => (
  <div className="card-columns">
    {props.state.map(item => (
      <div key={item.id} className="card" data-id={item.id}>
        <img src={item.picture} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
          <p className="card-text">{item.tags}</p>
          <button
            type="button"
            className="btn-danger btn-block btnForDelete"
            data-id={item.id}
            onClick={props.deleteItems}
          >
            Delete item
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default AllItemsAdmin;

AllItemsAdmin.propTypes = {
  state: PropTypes.array,
  deleteItems: PropTypes.func,
};

AllItemsAdmin.defaultProps = {
  state: [],
  deleteItems: () => {},
};
