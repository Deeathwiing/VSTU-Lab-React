import React from 'react';
import Slides from './header/SlidesInHead';
import NavbarContainer from '../containers/NavbarContainer';
import AsideSection from './main/AsideSection';
import Footer from './Footer';

const App = React.memo(() => (
  <>
    <Slides />
    <NavbarContainer />
    <AsideSection />
    <Footer />
  </>
));

export default App;
