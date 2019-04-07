import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "./css/media.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "./css/media.css";
import store from "./redux/state";

ReactDOM.render(
  <App state={store._state} dispatch={store.dispatch.bind(store)} />,
  document.getElementById("root")
);

serviceWorker.unregister();
