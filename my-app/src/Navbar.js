import React, { Component } from "react";
import logo from "../src/images/icon.png";
import { registration } from "./js/Registration";
import { login } from "./js/loginAndAdministration";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./Section/Section";

const Navbar = props => {
  return (
    <div>
      <header className="container mb-3">
        <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
          <div className=" col m-1 mr-4">
            <a href="#" className="navbar-brand">
              <img id="imgLogo" src={logo} />
              <span id="textLogo" className="ml-3">
                Vape Shop
              </span>
            </a>
          </div>

          <button
            className="navbar-toggler mr-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse col" id="navbarResponsive">
            <ul className="navbar-nav row d-flex justify-content-around">
              <li className="nav-item dropdown d-none PersonalArea">
                <a
                  href="#"
                  className="nav-link font-weight-bold dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Личный кабинет
                </a>
                <div
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Заказы
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Скидки
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Корзина
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Избранное
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Редактирование профиля
                  </a>
                  <div className="dropdown-divider linkAdmin d-none" />

                  <NavLink
                    className="dropdown-item d-none text-danger linkAdmin"
                    to="/administration"
                  >
                    Администрирование
                  </NavLink>
                </div>
              </li>

              <li className="nav-item dropdown removeAfterReg">
                <a
                  href=""
                  className="nav-link font-weight-bold"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Вход
                </a>
                <div
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
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
              </li>

              <li className="nav-item dropdown removeAfterReg">
                <a
                  href="#"
                  className="nav-link font-weight-bold"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Регистрация
                </a>
                <div
                  className="dropdown-menu bg-light"
                  id="Reg"
                  aria-labelledby="navbarDropdown"
                >
                  <form className="px-4 py-3">
                    <div className="form-group">
                      <label htmlFor="regEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="regEmail"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="regFirstName">Имя</label>
                      <input
                        type="text"
                        className="form-control"
                        id="regFirstName"
                        placeholder="Иван"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="regLastName">Фамилия</label>
                      <input
                        type="text"
                        className="form-control"
                        id="regLastName"
                        placeholder="Иванов"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="regPassword">Пароль</label>
                      <input
                        type="password"
                        className="form-control"
                        id="regPassword"
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
                      onClick={registration}
                      type="submit"
                      className="btn btn-primary"
                      id="RegistrationBtn"
                    >
                      Регистрация
                    </button>
                  </form>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  Каталог
                </a>

                <div
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Контакты
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Атомайзеры
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Электронные парогенераторы
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Жидкости
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Запчасти и комплектующие
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Все для самозамеса
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Новости и предложения
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Заказ
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Гарантия
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span id="NewItems">Новинки и акции!</span>
                </a>
              </li>

              <li className="nav-item ml-2">
                <form className="form-inline py-1">
                  <input
                    className="form-control mr-sm-2 shadow-lg"
                    id="Search"
                    type="search"
                    placeholder="Поиск"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-secondary my-2 my-sm-0 text-dark bg-light"
                    type="submit"
                  >
                    Поиск
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
