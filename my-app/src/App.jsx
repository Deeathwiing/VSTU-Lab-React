import React from "react";
import Slides from "./SlidesInHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import AsideSection from "./AsideSection";

const App = props => {
  return (
    <BrowserRouter state={props.state}>
      <Slides />
      <Navbar />
      <AsideSection state={props.state} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
