import React from 'react';
import { Route } from 'react-router-dom';
import ErrorAdmin from './ErrorAdmin';
import AdministrationContainer from './Administration/AdministrationContainer';

const AdminRoute = (props) => {
  if (props.state.user.admin) {
    return <Route path="/administration" component={AdministrationContainer} />;
  }
  return <Route path="/administration" component={ErrorAdmin} />;
};

export default AdminRoute;
