import React from "react";
import Slides from "./header/SlidesInHead";
import NavbarContainer from "../containers/NavbarContainer";
import AsideSection from "./main/AsideSection";
import Footer from "./Footer";

const App = React.memo((props) => (
  <>
    <Slides />
    <hr className="mainHR" />
    <NavbarContainer />
    <hr className="mainHR" />
    <AsideSection />
    <hr className="mainHR" />
    <Footer />
    <hr className="mainHR" />
  </>
));

export default App;
