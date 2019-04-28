import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkDropDown, NavLinksAdministration } from '../navLinks';

const navLinks = {
  NavLinkAside: [
    {
      to: '/newsAndPromotions',
      classNames: 'nav-link',
      description: 'Новости и предложения',
      liClass: 'col',
    },
    {
      to: '/order',
      classNames: 'nav-link',
      description: 'Заказ',
      liClass: 'col',
    },
    {
      to: '/warranty',
      classNames: 'nav-link',
      description: 'Гарантия',
      liClass: 'col',
    },
    {
      to: '/newsAndPromotions',
      classNames: 'nav-link text-danger',
      description: 'Новинки и акции!',
      liClass: 'col',
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

const Aside = () => (
  <aside className=" flex-column mr-1 col p-0 sticky-top" id="delete-aside">
    <nav className="nav flex-column navbar-light bg-light shadow">
      <ul className="navbar-nav p-4">
        <li className="nav-item col">
          <NavLink to="#" className="nav-link font-weight-bold">
            Главная
          </NavLink>
        </li>

        <li className="nav-item dropdown col">
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
        <NavLinksAdministration state={navLinks.NavLinkAside} />

        <li className="nav-item ml-1 row">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2 shadow-lg"
              id="aside-search"
              type="search"
              placeholder="Поиск"
              aria-label="Search"
            />
            <button
              // eslint-disable-next-line max-len
              className="btn btn-outline-secondary my-2 my-sm-0 text-dark bg-light"
              type="submit"
              id="aside-search-btn"
            >
              Поиск
            </button>
          </form>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Aside;
