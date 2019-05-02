import React from 'react';
import PropTypes from 'prop-types';
import Slides from '../header/slidesInHead';
import NavbarContainer from '../header/navbar/navbarContainer';
import AsideSection from '../main/asideSection';
import Footer from '../footer';

class App extends React.Component {
  componentDidMount() {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : {};
    this.props.init(user);
  }

  render() {
    return (
      <>
        <Slides key="Slides" />
        <NavbarContainer key="Navbar" />
        <AsideSection key="AsideSection" />
        <Footer key="Footer" />
      </>
    );
  }
}

export default App;

App.propTypes = {
  init: PropTypes.func,
};

App.defaultProps = {
  init: () => {},
};
