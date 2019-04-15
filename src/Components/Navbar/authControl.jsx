import React from 'react';
import LoginRegistration from './loginRegistration';
import PersonalArea from './personalArea';

const AuthControl = (props) => {
  const state = { user: props.state };

  if (state.user.admin || state.user.checkLogin) {
    return <PersonalArea key="PersonalArea" state={props.state} navLinks={props.navLinks} />;
  }
  return <LoginRegistration key="LoginRegistration" />;
};

export default AuthControl;
