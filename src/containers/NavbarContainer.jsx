import { connect } from 'react-redux';
import Navbar from '../components/header/navbar/Navbar';
import { getUser } from '../takes/Takes';

const mapStateToProps = state => ({
  state: { user: getUser(state) },
});

const NavbarContainer = connect(
  mapStateToProps,
  null
)(Navbar);

export default NavbarContainer;
