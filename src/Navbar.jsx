import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/icon.png";
import { NavLinksAdministration, NavLinkDropDown } from "./NavLinks";

const Navbar = props => {
  let user = props.state.user;
  let checkUser = user.checkLogin;
  let checkAdmin = user.admin;

  if (checkUser || checkAdmin) {
    if (checkAdmin) {
      return (
        <div>
          <header className="container mb-3">
            <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
              <div className=" col m-1 mr-4">
                <NavLink to="/newsAndPromotions" className="navbar-brand">
                  <img id="img-Logo" src={logo} alt="Logo" />
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
                      <NavLinkDropDown
                        state={props.state.NavLinkPersonalArea}
                      />
                      <NavLink className="dropdown-item" to="/editprofile">
                        Редактирование профиля
                      </NavLink>
                      <div className="dropdown-divider" />
                      <NavLink
                        className="dropdown-item text-danger"
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
                      <NavLinkDropDown state={props.state.NavLinkCatalog} />
                      <NavLink className="dropdown-item" to="#">
                        Все для самозамеса
                      </NavLink>
                    </div>
                  </li>

                  <NavLinksAdministration state={props.state.NavLinkNavbar} />

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
                  <img id="img-Logo" src={logo} alt="Logo" />
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
                      <NavLinkDropDown
                        state={props.state.NavLinkPersonalArea}
                      />
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
                      <NavLinkDropDown state={props.state.NavLinkCatalog} />
                      <NavLink className="dropdown-item" to="#">
                        Все для самозамеса
                      </NavLink>
                    </div>
                  </li>

                  <NavLinksAdministration state={props.state.NavLinkNavbar} />

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
                <img id="img-Logo" src={logo} alt="Logo" />
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
                <li className="nav-item dropdown">
                  <NavLink
                    to="/login"
                    className="nav-link font-weight-bold"
                    role="button"
                  >
                    Вход
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
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
                    <NavLinkDropDown state={props.state.NavLinkCatalog} />
                    <NavLink className="dropdown-item" to="#">
                      Все для самозамеса
                    </NavLink>
                  </div>
                </li>

                <NavLinksAdministration state={props.state.NavLinkNavbar} />

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
