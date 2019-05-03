import React from 'react';
import PropTypes from 'prop-types';
import Slides from './header/SlidesInHead';
import NavbarContainer from '../containers/NavbarContainer';
import AsideSection from './main/AsideSection';
import Footer from './Footer';

class App extends React.Component {
  componentDidMount() {
    const items = localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : [];
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

App.defaultProps = {
  init: () => {},
};
