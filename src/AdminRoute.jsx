import React from "react";
import Administration from "./Administration";
import { Route } from "react-router-dom";
import ErrorAdmin from "./ErrorAdmin";

export const AdminRoute = props => {
  let user = props.state.user;
  let checkAdmin = user.admin;
  if (checkAdmin) {
    return (
      <Route
        state={props.state}
        path="/administration"
        render={() => <Administration state={props.state} />}
      />
    );
  } else {
    return <Route path="/administration" component={ErrorAdmin} />;
  }
};
