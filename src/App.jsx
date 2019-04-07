import React from "react";
import Slides from "./SlidesInHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import AsideSection from "./AsideSection";

const App = props => {
  return (
    <BrowserRouter>
      <Slides />
      <Navbar state={props.state} />
      <AsideSection state={props.state} dispatch={props.dispatch} />
      <Footer state={props.state} />
    </BrowserRouter>
  );
};

export default App;
