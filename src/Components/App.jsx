import React from 'react';

import Slides from './SlidesInHead';
import Footer from './Footer';
import AsideSection from './AsideSection';
import NavbarContainer from './Navbar/navbarContainer';

const App = props => [
  <Slides key="Slides" />,
  <NavbarContainer key="Navbar" />,
  <AsideSection state={props.state} dispatch={props.dispatch} key="AsideSection" />,
  <Footer key="Footer" />,
];

export default App;
