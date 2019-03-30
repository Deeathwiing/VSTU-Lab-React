import React from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  function login() {
    let checkLogin = false;
    let admin = false;

    let usersBD = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    const logEmail = $("#logEmail")
      .val()
      .toLowerCase();
    const logPass = $("#logPass").val();
    checkLogin = usersBD.some(
      user => logEmail === user.email && logPass === user.password
    );

    admin = usersBD.some(
      user =>
        logEmail === user.email &&
        logPass === user.password &&
        user.administration
    );

    if (checkLogin) {
      if (admin) {
        localStorage.setItem("user", JSON.stringify({ logEmail, admin }));
      } else {
        localStorage.setItem("user", JSON.stringify({ logEmail, checkLogin }));
      }
    }

    if (!checkLogin & !admin) {
      alert("Введите правильный email и пароль");
    }
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
