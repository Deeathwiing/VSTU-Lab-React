import React, { Component } from "react";
import Slides from "./SlidesInHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aside_Section from "./Aside_Section";
import "popper.js";
import "jquery";
import "popper.js";
import "./js/ScreenSizeAdaptivity";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Slides />
        <Navbar />
        <Aside_Section />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
