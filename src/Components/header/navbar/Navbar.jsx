/* eslint-disable max-len */

import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../public/images/icon.png';
import AuthControl from './AuthControl';
import { NavLinkDropDown, NavLinksAdministration } from '../../NavLinks';

const navLinks = {
  NavLinkNavbar: [
    {
      to: '/newsAndPromotions',
      classNames: 'nav-link',
      description: 'Новости и предложения',
    },
    {
      to: '/order',
      classNames: 'nav-link',
      description: 'Заказ',
    },
    {
      to: '/warranty',
      classNames: 'nav-link',
      description: 'Гарантия',
    },
    {
      to: '/newsAndPromotions',
      classNames: 'nav-link text-danger',
      description: 'Новинки и акции!',
    },
  ],
  NavLinkPersonalArea: [
    {
      to: '/order',
      classNames: 'dropdown-item',
      description: 'Заказы',
    },
    {
      to: '#',
      classNames: 'dropdown-item',
      description: 'Скидки',
    },
    {
      to: '/order',
      classNames: 'dropdown-item',
      description: 'Корзина',
    },
    {
      to: '#',
      classNames: 'dropdown-item',
      description: 'Избранное',
    },
  ],
  NavLinkCatalog: [
    {
      to: '/items',
      classNames: 'dropdown-item',
      description: 'Все товары',
    },
    {
      to: '#',
      classNames: 'dropdown-item',
      description: 'Атомайзеры',
    },
    {
      to: '#',
      classNames: 'dropdown-item',
      description: 'Электронные парогенераторы',
    },
    {
      to: '#',
      classNames: 'dropdown-item',
      description: 'Жидкости',
    },
    {
      to: '#',
      classNames: 'dropdown-item',
      description: 'Запчасти и комплектующие',
    },
  ],
};

const Navbar = props => (
  <div>
    <header className="container mb-3">
      <nav className="navbar row  navbar-expand-md navbar-light bg-light shadow">
        <div className=" col m-1 mr-4">
          <NavLink to="/newsAndPromotions" className="navbar-brand">
            <img id="img-logo" src={logo} alt="Logo" />
            <span className="ml-3">Vape Shop</span>
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
              state={props.state.user}
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

Navbar.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.object,
  }),
};

Navbar.defaultProps = {
  state: {},
};
