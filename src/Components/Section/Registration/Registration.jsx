import React from 'react';
import RegistrationInput from './registrationInput';
import RegistrationSuccessfull from './registrationSuccessfull';
import News from '../News';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { check: true, usersLenght: this.props.state.usersLenght, regAction: false };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.regAction) {
      if (state.usersLenght != props.state.usersLenght) {
        return { check: false };
      }
      return { check: true, regAction: false };
    }
    return { check: true, regAction: false };
  }

  regCheck = (event, email, firstName, lastName, password) => {
    this.props.reg(event, email, firstName, lastName, password);
    this.setState({ regAction: true });
  };

  render() {
    // debugger;
    if ((this.props.state.user.admin || this.props.state.user.checkLogin) == undefined) {
      if (this.state.check) {
        return <RegistrationInput reg={this.regCheck} />;
      }
      return <RegistrationSuccessfull />;
    }
    return <News />;
  }
}

export default Registration;
