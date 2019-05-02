import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginSuccessful from './loginSuccessful';

class LogIn extends React.Component {
  state = { email: '', password: '' };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  log = (event) => {
    if (!this.state.email || !this.state.password) {
      alert('Заполните все поля');
      return;
    }
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    if (
      !((this.props.state.user.admin || this.props.state.user.checkLogin)
      === undefined
        ? false
        : this.props.state.user.admin || this.props.state.user.checkLogin)
    ) {
      return (
        <div>
          <form className="px-4 py-3">
            <div className="form-group">
              <label htmlFor="logEmail">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="logEmail"
                placeholder="email@example.com"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="logPass">Пароль</label>
              <input
                name="password"
                type="current-password"
                className="form-control"
                id="logPass"
                placeholder="Пароль"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Запомнить меня
                </label>
              </div>
            </div>
            <button
              onClick={this.log}
              type="button"
              className="btn btn-primary"
              id="login"
            >
              Войти
            </button>
          </form>
          <div className="dropdown-divider" />
          <NavLink to="/registration" className="dropdown-item">
            Впервые здесь ? Регистрация !
          </NavLink>
          <NavLink to="/registration" className="dropdown-item">
            Забыли пароль ?
          </NavLink>
        </div>
      );
    }
    return <LoginSuccessful />;
  }
}

export default LogIn;

LogIn.propTypes = {
  login: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object,
};

LogIn.defaultProps = {
  state: {},
  login: () => {},
};
