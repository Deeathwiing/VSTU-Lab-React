import { connect } from 'react-redux';
import Navbar from '../components/header/navbar/navbar';

const mapStateToProps = state => ({
  state: { user: state.user },
});

const NavbarContainer = connect(
  mapStateToProps,
  null
)(Navbar);

export default NavbarContainer;
