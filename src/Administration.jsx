import React from "react";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import AdminTable from "./Section/AdminTable";
import ItemsAdmin from "./Section/ItemsAdmin";
import AddItems from "./Section/AddItems";
import AllItemsAdmin from "./Section/AllItemsAdmin";

const Administration = props => {
  return (
    <div>
      <nav className="navbarAdmin row navbar-light bg-light p-3 justify-content-center">
        <div className="navbar-nav">
          <div className="row">
            <NavLink to="/administration/admintable" className="nav-link mx-2">
              AdminTable
            </NavLink>

            <NavLink to="/administration/adminitems" className="nav-link mx-2">
              Все товары
            </NavLink>

            <NavLink to="warranty" className="nav-link mx-2">
              Что то там еще
            </NavLink>
          </div>
        </div>
      </nav>
      <Route path="/administration/admintable" component={AdminTable} />
      <Route
        state={props.state}
        path="/administration/adminitems"
        component={ItemsAdmin}
      />
      <Route path="/administration/adminitems/additems" component={AddItems} />
      <Route
        state={props.state}
        path="/administration/adminitems/allitems"
        render={() => <AllItemsAdmin state={props.state} />}
      />
    </div>
  );
};

export default Administration;
