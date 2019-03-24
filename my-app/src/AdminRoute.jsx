import React from "react";
import { NavLink } from "react-router-dom";
import Administration from "./Administration";
import { Route } from "react-router-dom";
import News from "./Section/News";
import ErrorAdmin from "./ErrorAdmin";

let user = localStorage.user ? JSON.parse(localStorage.user) : [];
let checkAdmin = user.admin;

export const AdminRoute = props => {
  if (checkAdmin) {
    return <Route path="/administration" render={() => <Administration />} />;
  } else {
    alert("Не лезь, она тебя сожрёт");
    return <Route to="/erroradmin" component={ErrorAdmin} />;
  }
};
