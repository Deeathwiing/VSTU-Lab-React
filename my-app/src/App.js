import React, { Component } from "react";
import Slides from "./SlidesInHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aside_Section from "./Aside_Section";
import $ from "jquery";
import Popper from "popper.js";
import "jquery";
import "popper.js";
import "./js/ScreenSizeAdaptivity";

class App extends Component {
  render() {
    return (
      <div>
        <Slides />
        <Navbar />
        <Aside_Section />
        <Footer />
      </div>
    );
  }
}

export default App;
