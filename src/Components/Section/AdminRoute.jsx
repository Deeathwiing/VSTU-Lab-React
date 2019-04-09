import React from 'react';
import { Route } from 'react-router-dom';
import Administration from './Administration';
import ErrorAdmin from './ErrorAdmin';

const AdminRoute = (props) => {
  if (props.state.user.admin) {
    return (
      <Route
        path="/administration"
        render={() => <Administration state={props.state} dispatch={props.dispatch} />}
      />
    );
  }
  return <Route path="/administration" component={ErrorAdmin} />;
};

export default AdminRoute;
