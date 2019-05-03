import React from 'react';
import PropTypes from 'prop-types';

class RegistrationInput extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  registrationAttr = (event) => {
    event.preventDefault();
    if (
      this.state.email
      && this.state.firstName
      && this.state.lastName
      && this.state.password
    ) {
      return this.props.reg(
        this.state.email,
        this.state.firstName,
        this.state.lastName,
        this.state.password
      );
    }
    return alert('Заполните все поля');
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Reg">
        <form className="px-4 py-3">
          <div className="form-group">
            <label htmlFor="regEmail">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="regEmail"
              placeholder="email@example.com"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regFirstName">Имя</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="regFirstName"
              placeholder="Иван"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regLastName">Фамилия</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="regLastName"
              placeholder="Иванов"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regPassword">Пароль</label>
            <input
              name="password"
              type="new-password"
              className="form-control"
              id="regPassword"
              placeholder="Пароль"
              onChange={this.handleInput}
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
