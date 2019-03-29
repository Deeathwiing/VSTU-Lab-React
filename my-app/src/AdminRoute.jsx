import React from "react";
import Administration from "./Administration";
import { Route } from "react-router-dom";
import ErrorAdmin from "./ErrorAdmin";

let user = localStorage.user ? JSON.parse(localStorage.user) : [];
let checkAdmin = user.admin;

export const AdminRoute = props => {
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
