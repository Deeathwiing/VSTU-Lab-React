import React from "react";
import Administration from "./Administration";
import { Route } from "react-router-dom";
import ErrorAdmin from "./ErrorAdmin";

let user = localStorage.user ? JSON.parse(localStorage.user) : [];
let checkAdmin = user.admin;

export const AdminRoute = props => {
  if (checkAdmin) {
    return <Route path="/administration" render={() => <Administration />} />;
  } else {
    return <Route path="/administration" render={() => <ErrorAdmin />} />;
  }
};
