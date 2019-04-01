import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "./css/media.css";
import state from "./redux/state";

ReactDOM.render(<App state={state} />, document.getElementById("root"));

serviceWorker.unregister();
