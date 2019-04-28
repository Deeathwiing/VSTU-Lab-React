import React from 'react';
import PropTypes from 'prop-types';

class RegistrationInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: false,
      firstName: false,
      lastName: false,
      password: false,
    };
  }

  registrationAttr = (event) => {
    event.preventDefault();
    this.props.reg(
      this.state.email || false,
      this.state.firstName || false,
      this.state.lastName || false,
      this.state.password || false
    );
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="Reg">
        <form className="px-4 py-3">
          <div className="form-group">
            <label htmlFor="regEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="regEmail"
              placeholder="email@example.com"
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regFirstName">Имя</label>
            <input
              type="text"
              className="form-control"
              id="regFirstName"
              placeholder="Иван"
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regLastName">Фамилия</label>
            <input
              type="text"
              className="form-control"
              id="regLastName"
              placeholder="Иванов"
              onChange={this.handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regPassword">Пароль</label>
            <input
              type="new-password"
              className="form-control"
              id="regPassword"
              placeholder="Пароль"
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="RememberMeCheckbox"
              />
              <label className="form-check-label" htmlFor="RememberMeCheckbox">
                Запомнить меня
              </label>
            </div>
          </div>
          <button
            onClick={this.registrationAttr}
            type="submit"
            className="btn btn-primary"
            id="RegistrationBtn"
          >
            Регистрация
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationInput;

RegistrationInput.propTypes = {
  reg: PropTypes.func,
};

RegistrationInput.defaultProps = {
  reg: () => {},
};
