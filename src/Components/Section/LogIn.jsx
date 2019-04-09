import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

const LogIn = (props) => {
  function login() {
    const logEmail = $('#logEmail')
      .val()
      .toLowerCase();
    const logPass = $('#logPass').val();
    const actionCreator = () => ({ type: 'LOGIN', logEmail, logPass });
    props.dispatch(actionCreator());
  }

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
          <input type="password" className="form-control" id="logPass" placeholder="Пароль" />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input type="checkbox" id="remember-me" className="form-check-input" />
            <label className="form-check-label" htmlFor="remember-me">
              Запомнить меня
            </label>
          </div>
        </div>
        <button onClick={login} type="button" className="btn btn-primary" id="login">
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
};

export default LogIn;
