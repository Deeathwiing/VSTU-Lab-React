import React from 'react';

import Slides from './SlidesInHead';
import Navbar from './Navbar';
import Footer from './Footer';
import AsideSection from './AsideSection';

const App = props => [
  <Slides key="Slides" />,
  <Navbar state={props.state} key="Navbar" />,
  <AsideSection state={props.state} dispatch={props.dispatch} key="AsideSection" />,
  <Footer key="Footer" />,
];

export default App;
