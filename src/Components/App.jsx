import React from 'react';

import Slides from './SlidesInHead';
import Footer from './Footer';
import AsideSection from './AsideSection';
import NavbarContainer from './Navbar/navbarContainer';

const App = () => [
  <Slides key="Slides" />,
  <NavbarContainer key="Navbar" />,
  <AsideSection key="AsideSection" />,
  <Footer key="Footer" />,
];

export default App;
