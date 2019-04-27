import React from 'react';
import PropTypes from 'prop-types';
import Slides from '../header/slidesInHead';
import NavbarContainer from '../header/navbar/navbarContainer';
import AsideSection from '../main/asideSection';
import Footer from '../footer';

class App extends React.Component {
  componentDidMount() {
    const items = localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : [null];
    const users = localStorage.getItem('users')
      ? JSON.parse(localStorage.getItem('users'))
      : [{ id: 0 }];
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : {};
    this.props.init(items, users, user);
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
