import React from "react";
import Slides from "./SlidesInHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./js/ScreenSizeAdaptivity";
import { BrowserRouter } from "react-router-dom";
import AsideSection from "./AsideSection";
import "./js/DeleteItems";

const App = () => (
  <BrowserRouter>
    <Slides />
    <Navbar />
    <AsideSection />
    <Footer />
  </BrowserRouter>
);

export default App;
