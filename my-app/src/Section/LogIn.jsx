import React, { Component } from "react";
import { login } from "../js/loginAndAdministration";

class LogIn extends Component {
  render() {
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="logPass">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="logPass"
              placeholder="Пароль"
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="checkbox">
                Запомнить меня
              </label>
            </div>
          </div>
          <button
            onClick={login}
            type="button"
            className="btn btn-primary"
            id="login"
          >
            Войти
          </button>
        </form>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          Впервые здесь ? Регистрация !
        </a>
        <a className="dropdown-item" href="#">
          Забыли пароль ?
        </a>
      </div>
    );
  }
}

export default LogIn;
