import React from 'react';
import PropTypes from 'prop-types';
import LoginRegistration from './loginRegistration';
import PersonalArea from './personalArea';

const AuthControl = (props) => {
  if (props.state.admin || props.state.checkLogin) {
    return <PersonalArea state={props.state} navLinks={props.navLinks} />;
  }
  return <LoginRegistration />;
};

export default AuthControl;

AuthControl.propTypes = {
  state: PropTypes.object,
  navLinks: PropTypes.array,
};

AuthControl.defaultProps = {
  state: {},
  navLinks: [],
};
