import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Slides from './SlidesInHead';
import Navbar from './Navbar';
import Footer from './Footer';
import AsideSection from './AsideSection';

const App = props => (
  <BrowserRouter>
    <Slides />
    <Navbar state={props.state} />
    <AsideSection state={props.state} dispatch={props.dispatch} />
    <Footer state={props.state} />
  </BrowserRouter>
);

export default App;
