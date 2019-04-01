import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinkDropDown, NavLinksAdministration } from "./NavLinks";

const Aside = props => {
  return (
    <aside className=" flex-column mr-1 col p-0 sticky-top" id="delete-Aside">
      <nav className="nav flex-column navbar-light bg-light shadow">
        <ul className="navbar-nav p-4">
          <li className="nav-item col">
            <a href="#" className="nav-link font-weight-bold">
              Главная
            </a>
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
              <NavLinkDropDown state={props.state.NavLinkCatalog} />
              <NavLink className="dropdown-item" to="#">
                Все для самозамеса
              </NavLink>
            </div>
          </li>
          <NavLinksAdministration state={props.state.NavLinkAside} />

          <li className="nav-item ml-1 row">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2 shadow-lg"
                id="aside-Search"
                type="search"
                placeholder="Поиск"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-secondary my-2 my-sm-0 text-dark bg-light"
                type="submit"
                id="aside-Search-Btn"
              >
                Поиск
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
