import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  state: { user: state.user },
});

const mapDispatchToProps = dispatch => ({});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

export default NavbarContainer;
