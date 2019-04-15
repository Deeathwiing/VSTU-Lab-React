import React from 'react';
import RegistrationInput from './registrationInput';
import RegistrationSuccessfull from './registrationSuccessfull';
import News from '../News';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { check: true, usersLenght: this.props.state.usersLenght };
  }

  componentWillReceiveProps = () => {
    this.setState({ check: false });
  };

  check = () => this.state.check;

  render() {
    if (this.props.state.user[0] === null) {
      if (this.check()) {
        return <RegistrationInput reg={this.props.reg} />;
      }
      return <RegistrationSuccessfull />;
    }
    return <News />;
  }
}

export default Registration;
