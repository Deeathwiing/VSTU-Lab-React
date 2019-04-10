import React from 'react';
import { Route } from 'react-router-dom';
import ItemsAdmin from './ItemsAdmin';
import AddItems from './AddItems';
import AllItemsAdmin from './AllItemsAdmin';
import { NavLinksAdministration } from '../../NavLinks';
import AdminTable from './AdminTable/AdminTable';

const Administration = props => (
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
        <AdminTable
          state={props.state.users}
          dispatch={props.dispatch}
          deleteUsersActionCreator={props.deleteUsersActionCreator}
        />
      )}
    />
    <Route path="/administration/adminitems" component={ItemsAdmin} />
    <Route
      path="/administration/adminitems/additems"
      render={() => (
        <AddItems
          state={props.state.items}
          dispatch={props.dispatch}
          addItemsActionCreator={props.addItemsActionCreator}
        />
      )}
    />
    <Route
      path="/administration/adminitems/allitems"
      render={() => (
        <AllItemsAdmin
          state={props.state}
          dispatch={props.dispatch}
          deleteItemsActionCreator={props.deleteItemsActionCreator}
        />
      )}
    />
  </div>
);

export default Administration;
