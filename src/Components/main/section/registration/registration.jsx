import React from 'react';
import PropTypes from 'prop-types';
import RegistrationInput from './registrationInput';
import RegistrationSuccessfull from './registrationSuccessfull';
import News from '../news';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
      usersLength: this.props.state.usersLength,
      regAction: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.regAction) {
      if (state.usersLength !== props.state.usersLength) {
        return {
          check: false,
          regAction: false,
          usersLength: props.state.usersLength,
        };
      }
      return {
        check: true,
        regAction: false,
        usersLength: props.state.usersLength,
      };
    }
    return {
      check: true,
      regAction: false,
      usersLength: props.state.usersLength,
    };
  }

  regCheck = (email, firstName, lastName, password) => {
    this.props.reg(email, firstName, lastName, password);
    this.setState({ regAction: true });
  };

  render() {
    if (
      (this.props.state.user.admin || this.props.state.user.checkLogin)
      === undefined
    ) {
      if (this.state.check) {
        return <RegistrationInput reg={this.regCheck} />;
      }
      return <RegistrationSuccessfull />;
    }
    return <News />;
  }
}

export default Registration;

Registration.propTypes = {
  state: PropTypes.object,
  reg: PropTypes.func,
};

Registration.defaultProps = {
  state: {},
  reg: () => {},
};
