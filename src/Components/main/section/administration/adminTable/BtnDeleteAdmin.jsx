/* eslint-disable no-underscore-dangle */
import React from 'react';

import PropTypes from 'prop-types';

const BtnDeleteAdmin = props => (
  <button
    type="button"
    className="btnForDelete btn-danger btn-block"
    data-id={props.state.id}
    key={props.state.id}
    onClick={props.deleteAdmin}
  >
    delete admin
  </button>
);

export default BtnDeleteAdmin;

BtnDeleteAdmin.propTypes = {
  state: PropTypes.shape({
    administration: PropTypes.bool,

    deleteAccountRequest: PropTypes.bool,

    email: PropTypes.string,

    firstName: PropTypes.string,
    id: PropTypes.number,
    lastName: PropTypes.string,
    password: PropTypes.string,
  }),
  deleteAdmin: PropTypes.func,
};

BtnDeleteAdmin.defaultProps = {
  state: {},
  deleteAdmin: () => {},
};
