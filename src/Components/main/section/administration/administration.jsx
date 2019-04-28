/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemsAdmin from './itemsManagerMenu';
import AddItems from './addItems';
import { NavLinksAdministration } from '../../../navLinks';

const AllItemsAdmin = React.lazy(() => import('./allItemsAdmin'));
const AdminTable = React.lazy(() => import('./adminTable/adminTable'));

const navlinks = {
  NavLinkAdministration: [
    {
      to: '/administration/admintable',
      classNames: 'nav-link mx-2',
      description: 'AdminTable',
    },
    {
      to: '/administration/adminitems',
      classNames: 'nav-link mx-2',
      description: 'Все товары',
    },
    {
      to: '/administration/adminitems',
      classNames: 'nav-link mx-2',
      description: 'Что то там еще',
    },
  ],
};

// console.log(props);
const Administration = props => (
  <div>
    <nav className="navbarAdmin row navbar-light bg-light w-100 p-3 justify-content-center">
      <ul className="navbar-nav">
        <div className="row">
          <NavLinksAdministration state={navlinks.NavLinkAdministration} />
        </div>
      </ul>
    </nav>

    <Route
      path="/administration/admintable"
      render={() => (
        <React.Suspense fallback={<div>Loading...</div>}>
          <AdminTable state={props.state.users} deleteUser={props.deleteUser} />
        </React.Suspense>
      )}
    />
    <Route path="/administration/adminitems" component={ItemsAdmin} />
    <Route
      path="/administration/adminitems/additems"
      render={() => <AddItems addItems={props.addItems} />}
    />
    <Route
      path="/administration/adminitems/allitems"
      render={() => (
        <React.Suspense fallback={<div>Loading...</div>}>
          <AllItemsAdmin
            state={props.state.items}
            deleteItems={props.deleteItems}
          />
        </React.Suspense>
      )}
    />
  </div>
);
export default Administration;

Administration.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object,
  deleteUser: PropTypes.func,
  addItems: PropTypes.func,
  deleteItems: PropTypes.func,
};

Administration.defaultProps = {
  state: {},
  deleteUser: () => {},
  addItems: () => {},
  deleteItems: () => {},
};
