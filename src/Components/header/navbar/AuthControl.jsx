import React from 'react';
import PropTypes from 'prop-types';
import LoginRegistration from './LoginRegistration';
import PersonalArea from './PersonalArea';

const AuthControl = (props) => {
  if (props.state.admin || props.state.checkLogin) {
    return <PersonalArea state={props.state} navLinks={props.navLinks} />;
  }
  return <LoginRegistration />;
};

export default AuthControl;

AuthControl.propTypes = {
  state: PropTypes.shape({
    admin: PropTypes.bool,
    checkLogin: PropTypes.bool,
  }),
  navLinks: PropTypes.arrayOf(PropTypes.object),
};

AuthControl.defaultProps = {
  state: {},
  navLinks: [],
};
