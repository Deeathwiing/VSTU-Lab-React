/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemsAdmin from './ItemsManagerMenu';
import AddItems from './AddItems';
import { NavLinksAdministration } from '../../../NavLinks';
import imgLoading from '../../../../public/images/gearLoading.svg';

const AllItemsAdmin = React.lazy(() => import('./AllItemsAdmin'));
const AdminTable = React.lazy(() => import('./adminTable/AdminTable'));

const navLinks = {
  navLinkAdministration: [
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

const Administration = React.memo(props => (
  <div>
    <nav className="navbarAdmin row navbar-light bg-light w-100 p-3 justify-content-center">
      <ul className="navbar-nav">
        <div className="row">
          <NavLinksAdministration state={navLinks.navLinkAdministration} />
        </div>
      </ul>
    </nav>

    <Route
      path="/administration/admintable"
      render={() => (
        <React.Suspense fallback={<img alt="Loading..." src={imgLoading} />}>
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
        <React.Suspense fallback={<img alt="Loading..." src={imgLoading} />}>
          <AllItemsAdmin
            updateItem={props.updateItem}
            state={props.state.items}
            deleteItems={props.deleteItems}
            init={props.init}
          />
        </React.Suspense>
      )}
    />
  </div>
));
export default Administration;

Administration.propTypes = {
  state: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
  }),
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
