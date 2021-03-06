/* eslint-disable max-len */

import { NavLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import logotype from "../../../public/images/logotype.jpg";
import AuthControl from "./AuthControl";
import { NavLinkDropDown, NavLinksAdministration } from "../../NavLinks";

const navLinks = {
  NavLinkNavbar: [
    {
      to: "/newsAndPromotions",
      classNames: "nav-link",
      description: "Новости и предложения",
    },
    {
      to: "/order",
      classNames: "nav-link",
      description: "Заказ",
    },
    {
      to: "/warranty",
      classNames: "nav-link",
      description: "Гарантия",
    },
    {
      to: "/newsAndPromotions",
      classNames: "nav-link text-danger",
      description: "Новинки и акции!",
    },
  ],
  NavLinkPersonalArea: [
    {
      to: "/order",
      classNames: "dropdown-item",
      description: "Заказы",
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Скидки",
    },
    {
      to: "/order",
      classNames: "dropdown-item",
      description: "Корзина",
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Избранное",
    },
  ],
  NavLinkCatalog: [
    {
      to: "/items",
      classNames: "dropdown-item",
      description: "Все товары",
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Атомайзеры",
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Электронные парогенераторы",
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Жидкости",
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Запчасти и комплектующие",
    },
  ],
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  state = { labelSearch: "" };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.state.user !== nextState.user) {
      return true;
    }
    return false;
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <header className="container mb-3">
          <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
            <div className=" col m-1 mr-4">
              <NavLink to="/newsAndPromotions" className="navbar-brand">
                <img id="img-logo" src={logotype} alt="Logo" />
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
                <AuthControl
                  key="AuthControl"
                  state={this.props.state.user}
                  navLinks={navLinks.NavLinkPersonalArea}
                />

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
                    <NavLinkDropDown state={navLinks.NavLinkCatalog} />
                    <NavLink className="dropdown-item" to="#">
                      Все для самозамеса
                    </NavLink>
                  </div>
                </li>

                <NavLinksAdministration state={navLinks.NavLinkNavbar} />

                <li className="nav-item ml-2">
                  <form className="form-inline py-1">
                    <input
                      className="form-control mr-sm-2 shadow-lg"
                      id="Search"
                      type="search"
                      placeholder="Поиск"
                      aria-label="Search"
                      onChange={this.handleInput}
                      name="labelSearch"
                    />
                    <button
                      className="btn btn-outline-secondary my-2 my-sm-0 text-dark bg-light"
                      type="button"
                    >
                      Поиск
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.object,
    navLinks: PropTypes.arrayOf(PropTypes.object),
  }),
};

Navbar.defaultProps = {
  state: {},
};
