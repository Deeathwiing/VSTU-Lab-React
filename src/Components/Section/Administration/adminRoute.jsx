import React from 'react';
import { Route } from 'react-router-dom';
import ErrorAdmin from './errorAdmin';
import Administration from './Administration';

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
            initializationUsers={props.initializationUsers}
            initializationItems={props.initializationItems}
            state={props.state}
          />
        )}
      />
    );
  }
  return <Route path="/administration" component={ErrorAdmin} />;
};

export default AdminRoute;
