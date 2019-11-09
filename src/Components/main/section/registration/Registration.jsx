import React from 'react';
import PropTypes from 'prop-types';
import RegistrationInput from './RegistrationInput';
import RegistrationSuccessful from './RegistrationSuccessful';
import News from '../News';

class Registration extends React.Component {
  state = { regSuc: false, usersLength: this.props.state.usersLength };

  regCheck = (email, firstName, lastName, password) => {
    this.props.reg(email, firstName, lastName, password);
  };

  render() {
    if (
      (this.props.state.user.admin || this.props.state.user.checkLogin)
      === undefined
    ) {
      if (this.state.regSuc) {
        return <RegistrationSuccessful />;
      }
      if (this.props.usersHasErrored) {
        return (
          <>
            <h6>Данный email занят</h6>
            <RegistrationInput reg={this.regCheck} />
          </>
        );
      }
      return <RegistrationInput reg={this.regCheck} />;
    }
    return <News />;
  }
}

export default Registration;

Registration.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.object,
    usersLength: PropTypes.number,
  }),
  reg: PropTypes.func,
  usersHasErrored: PropTypes.bool,
};

Registration.defaultProps = {
  state: {},
  reg: () => {},
  usersHasErrored: false,
};
