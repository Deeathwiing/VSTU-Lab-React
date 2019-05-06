/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

const AllItemsAdmin = (props) => {
  const lastElement = props.state[props.state.length - 1];
  if (lastElement) {
    return (
      <div className="card-columns">
        {props.state.map(item => (
          <div key={item._id} className="card" data-id={item._id}>
            <img src={item.picture} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
              <p className="card-text">{item.tags}</p>
              <button
                type="button"
                className="btn-danger btn-block btnForDelete"
                data-id={item._id}
                onClick={props.deleteItems}
              >
                Delete item
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default AllItemsAdmin;

AllItemsAdmin.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  deleteItems: PropTypes.func,
};

AllItemsAdmin.defaultProps = {
  state: [],
  deleteItems: () => {},
};
