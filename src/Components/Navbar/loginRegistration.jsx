import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginRegistration = () => (
  <>
    <li className="nav-item dropdown">
      <NavLink key="login" to="/login" className="nav-link font-weight-bold" role="button">
        Вход
      </NavLink>
    </li>

    <li className="nav-item dropdown">
      <NavLink key="reg" to="/registration" className="nav-link font-weight-bold" role="button">
        Регистрация
      </NavLink>
    </li>
  </>
);

export default LoginRegistration;
