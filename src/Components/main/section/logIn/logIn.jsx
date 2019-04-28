import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginSuccessfull from './loginSuccessfull';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  static getDerivedStateFromProps(props, state) {
    return props.state;
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  log = (event) => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    if (
      !((this.state.user.admin || this.state.user.checkLogin) === undefined
        ? false
        : this.state.user.admin || this.state.user.checkLogin)
    ) {
      return (
        <div>
          <form className="px-4 py-3">
            <div className="form-group">
              <label htmlFor="logEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="logEmail"
                placeholder="email@example.com"
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="logPass">Пароль</label>
              <input
                type="current-password"
                className="form-control"
                id="logPass"
                placeholder="Пароль"
                onChange={this.handlePasswordChange}
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
    return <LoginSuccessfull />;
  }
}

export default LogIn;

LogIn.propTypes = {
  login: PropTypes.func,
  state: PropTypes.object,
};

LogIn.defaultProps = {
  state: {},
  login: () => {},
};
