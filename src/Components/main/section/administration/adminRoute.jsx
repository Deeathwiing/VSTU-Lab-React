import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorAdmin from './errorAdmin';
import Administration from './administration';

const AdminRoute = (props) => {
  if (props.state.user.admin) {
    return (
      <Route
        path="/administration"
        render={() => (
          <Administration
            addItems={props.addItems}
            deleteItems={props.deleteItems}
            deleteUser={props.deleteUser}
            state={props.state}
          />
        )}
      />
    );
  }
  return <Route path="/administration" component={ErrorAdmin} />;
};

export default AdminRoute;

AdminRoute.propTypes = {
  state: PropTypes.object,
  addItems: PropTypes.func,
  deleteItems: PropTypes.func,
  deleteUser: PropTypes.func,
};
