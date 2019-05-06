/* eslint-disable no-underscore-dangle */
import React from 'react';

import PropTypes from 'prop-types';

const BtnDelete = (props) => {
  if (props.state.deleteAccountRequest) {
    return (
      <button
        type="button"
        className="btnForDelete btn-danger btn-block"
        data-id={props.state._id}
        key={props.state._id}
        onClick={props.deleteUser}
      >
        Delete
      </button>
    );
  }
  return null;
};

export default BtnDelete;

BtnDelete.propTypes = {
  state: PropTypes.shape({
    administration: PropTypes.bool,

    deleteAccountRequest: PropTypes.bool,

    email: PropTypes.string,

    firstName: PropTypes.string,
    _id: PropTypes.string,
    lastName: PropTypes.string,
    password: PropTypes.string,
  }),
  deleteUser: PropTypes.func,
};

BtnDelete.defaultProps = {
  state: {},
  deleteUser: () => {},
};
