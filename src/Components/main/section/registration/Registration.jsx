import React from 'react';
import PropTypes from 'prop-types';
import RegistrationInput from './RegistrationInput';
import RegistrationSuccessful from './RegistrationSuccessful';
import News from '../News';

class Registration extends React.PureComponent {
  regCheck = (email, firstName, lastName, password) => {
    this.props.reg(email, firstName, lastName, password);
  };

  render() {
    if (
      (this.props.state.user.admin || this.props.state.user.checkLogin)
      === undefined
    ) {
      if (1) {
        return <RegistrationInput reg={this.regCheck} />;
      }
      return <RegistrationSuccessful />;
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
};

Registration.defaultProps = {
  state: {},
  reg: () => {},
};
