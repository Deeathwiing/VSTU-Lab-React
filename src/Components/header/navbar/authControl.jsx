import React from 'react';
import PropTypes from 'prop-types';
import LoginRegistration from './loginRegistration';
import PersonalArea from './personalArea';

const AuthControl = (props) => {
  // fix
  const state = { user: props.state };

  if (state.user.admin || state.user.checkLogin) {
    return (
      <PersonalArea
        key="PersonalArea"
        state={props.state}
        navLinks={props.navLinks}
      />
    );
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
