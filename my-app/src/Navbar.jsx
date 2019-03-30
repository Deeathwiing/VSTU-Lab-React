import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/icon.png";

let user = localStorage.user ? JSON.parse(localStorage.user) : [];
let checkUser = user.checkLogin;
let checkAdmin = user.admin;

const Navbar = props => {
  if (checkUser || checkAdmin) {
    if (checkAdmin) {
      return (
        <div>
          <header className="container mb-3">
            <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
              <div className=" col m-1 mr-4">
                <NavLink to="/newsAndPromotions" className="navbar-brand">
                  <img id="imgLogo" src={logo} alt="Logo" />
                  <span id="textLogo" className="ml-3">
                    Vape Shop
                  </span>
                </NavLink>
              </div>

              <button
                className="navbar-toggler mr-1"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse col"
                id="navbarResponsive"
              >
                <ul className="navbar-nav row d-flex justify-content-around">
                  <li className="nav-item dropdown PersonalArea">
                    <NavLink
                      to="#"
                      className="nav-link font-weight-bold dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Личный кабинет
                    </NavLink>
                    <div className="dropdown-menu bg-light">
                      <NavLink className="dropdown-item" to="/order">
                        Заказы
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Скидки
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="/order">
                        Корзина
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Избранное
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="/editprofile">
                        Редактирование профиля
                      </NavLink>
                      <div className="dropdown-divider linkAdmin" />
                      <NavLink
                        className="dropdown-item text-danger linkAdmin"
                        to="/administration"
                      >
                        Администрирование
                      </NavLink>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      to="items"
                    >
                      Каталог
                    </NavLink>

                    <div className="dropdown-menu bg-light">
                      <NavLink className="dropdown-item" to="/items">
                        Все товары
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Атомайзеры
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Электронные парогенераторы
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Жидкости
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Запчасти и комплектующие
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Все для самозамеса
                      </NavLink>
                    </div>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/newsAndPromotions" className="nav-link">
                      Новости и предложения
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/order" className="nav-link">
                      Заказ
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/warranty" className="nav-link">
                      Гарантия
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/newsAndPromotions" className="nav-link">
                      <span id="NewItems">Новинки и акции!</span>
                    </NavLink>
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
    } else {
      return (
        <div>
          <header className="container mb-3">
            <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
              <div className=" col m-1 mr-4">
                <NavLink to="/newsAndPromotions" className="navbar-brand">
                  <img id="imgLogo" src={logo} alt="Logo" />
                  <span id="textLogo" className="ml-3">
                    Vape Shop
                  </span>
                </NavLink>
              </div>

              <button
                className="navbar-toggler mr-1"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse col"
                id="navbarResponsive"
              >
                <ul className="navbar-nav row d-flex justify-content-around">
                  <li className="nav-item dropdown PersonalArea">
                    <NavLink
                      to="#"
                      className="nav-link font-weight-bold dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Личный кабинет
                    </NavLink>
                    <div className="dropdown-menu bg-light">
                      <NavLink className="dropdown-item" to="#">
                        Заказы
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Скидки
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="/order">
                        Корзина
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Избранное
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="/editprofile">
                        Редактирование профиля
                      </NavLink>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      to="items"
                    >
                      Каталог
                    </NavLink>

                    <div className="dropdown-menu bg-light">
                      <NavLink className="dropdown-item" to="/items">
                        Все товары
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="/about">
                        Контакты
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Атомайзеры
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Электронные парогенераторы
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Жидкости
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Запчасти и комплектующие
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="#">
                        Все для самозамеса
                      </NavLink>
                    </div>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/newsAndPromotions" className="nav-link">
                      Новости и предложения
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/order" className="nav-link">
                      Заказ
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/warranty" className="nav-link">
                      Гарантия
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/newsAndPromotions" className="nav-link">
                      <span id="NewItems">Новинки и акции!</span>
                    </NavLink>
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
    }
  } else {
    return (
      <div>
        <header className="container mb-3">
          <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
            <div className=" col m-1 mr-4">
              <NavLink to="/newsAndPromotions" className="navbar-brand">
                <img id="imgLogo" src={logo} alt="Logo" />
                <span id="textLogo" className="ml-3">
                  Vape Shop
                </span>
              </NavLink>
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
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    to="items"
                  >
                    Каталог
                  </NavLink>

                  <div className="dropdown-menu bg-light">
                    <NavLink className="dropdown-item" to="/items">
                      Все товары
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="/about">
                      Контакты
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="#">
                      Атомайзеры
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="#">
                      Электронные парогенераторы
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="#">
                      Жидкости
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="#">
                      Запчасти и комплектующие
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="#">
                      Все для самозамеса
                    </NavLink>
                  </div>
                </li>

                <li className="nav-item">
                  <NavLink to="/newsAndPromotions" className="nav-link">
                    Новости и предложения
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/order" className="nav-link">
                    Заказ
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/warranty" className="nav-link">
                    Гарантия
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/newsAndPromotions" className="nav-link">
                    <span id="NewItems">Новинки и акции!</span>
                  </NavLink>
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
  }
};

export default Navbar;
