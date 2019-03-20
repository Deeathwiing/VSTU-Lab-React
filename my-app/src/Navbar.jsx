import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/icon.png";
import { registration } from "./js/Registration";
import { login } from "./js/loginAndAdministration";

const Navbar = () => (
  <div>
    <header className="container mb-3">
      <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
        <div className=" col m-1 mr-4">
          <a href="#" className="navbar-brand">
            <img id="imgLogo" src={logo} alt="Logo" />
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
              <NavLink
                to="/login"
                className="nav-link font-weight-bold"
                role="button"
              >
                Вход
              </NavLink>
            </li>

            <li className="nav-item dropdown removeAfterReg">
              <NavLink
                to="/registration"
                className="nav-link font-weight-bold"
                role="button"
              >
                Регистрация
              </NavLink>
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

export default Navbar;
