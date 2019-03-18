import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "jquery";
import "popper.js";
import "./js/ScreenSizeAdaptivity";
import "./js/Registration";
import "./js/login_and_administration";
import { BrowserRouter, Route } from "react-router-dom";
import "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
