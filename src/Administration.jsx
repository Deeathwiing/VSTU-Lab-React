import React from "react";
import { Route } from "react-router-dom";
import ItemsAdmin from "./Section/ItemsAdmin";
import AddItems from "./Section/AddItems";
import AllItemsAdmin from "./Section/AllItemsAdmin";
import { NavLinksAdministration } from "./NavLinks";
import { AdminTable } from "./Section/AdminTable";

const Administration = props => {
  return (
    <div>
      <nav className="navbarAdmin row navbar-light bg-light w-100 p-3 justify-content-center">
        <ul className="navbar-nav">
          <div className="row">
            <NavLinksAdministration state={props.state.NavLinkAdministration} />
          </div>
        </ul>
      </nav>

      <Route
        path="/administration/admintable"
        render={() => (
          <AdminTable state={props.state} deleteUser={props.deleteUser} />
        )}
      />
      <Route
        state={props.state}
        path="/administration/adminitems"
        component={ItemsAdmin}
      />
      <Route
        path="/administration/adminitems/additems"
        render={() => (
          <AddItems state={props.state} addItems={props.addItems} />
        )}
      />
      <Route
        path="/administration/adminitems/allitems"
        render={() => (
          <AllItemsAdmin state={props.state} deleteItems={props.deleteItems} />
        )}
      />
    </div>
  );
};

export default Administration;
