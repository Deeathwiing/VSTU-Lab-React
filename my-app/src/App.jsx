
import React from 'react';
import Slides from './SlidesInHead';
import Navbar from './Navbar';
import Footer from './Footer';
import './js/ScreenSizeAdaptivity';
import { BrowserRouter } from 'react-router-dom';
import AsideSection from './AsideSection';

const App = () => (
  <BrowserRouter>
    <div>
      <Slides />
      <Navbar />
      <AsideSection />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
