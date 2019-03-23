import React from "react";
import { NavLink } from "react-router-dom";

const Administration = () => (
  <nav className="navbarAdmin row navbar-light bg-light navbar p-3 justify-content-center">
    <nav className="navbar-nav">
      <div className="row">
        <NavLink to="/administration/admintable" className="nav-link mx-2">
          AdminTable
        </NavLink>

        <NavLink to="/administration/itemsadmin" className="nav-link mx-2">
          Все товары
        </NavLink>

        <NavLink to="warranty" className="nav-link mx-2">
          Что то там еще
        </NavLink>
      </div>
    </nav>
  </nav>
);

export default Administration;
