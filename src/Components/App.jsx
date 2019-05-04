import React from 'react';
import Slides from './header/SlidesInHead';
import NavbarContainer from '../containers/NavbarContainer';
import AsideSection from './main/AsideSection';
import Footer from './Footer';

const App = () => (
  <>
    <Slides key="Slides" />
    <NavbarContainer key="Navbar" />
    <AsideSection key="AsideSection" />
    <Footer key="Footer" />
  </>
);

export default App;
