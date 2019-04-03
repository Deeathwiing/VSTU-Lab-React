import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "./css/media.css";
import {
  state,
  addItems,
  deleteItems,
  addUser,
  logIn,
  deleteUser
} from "./redux/state";

let reRender = () => {
  ReactDOM.render(
    <App
      state={state}
      addItems={addItems}
      deleteItems={deleteItems}
      addUser={addUser}
      logIn={logIn}
      deleteUser={deleteUser}
    />,
    document.getElementById("root")
  );
};
