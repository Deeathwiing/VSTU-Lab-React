import { connect } from 'react-redux';
import Navbar from '../components/header/navbar/Navbar';
import { userSelector } from '../selectors/Selectors';

const mapStateToProps = state => ({
  state: { user: userSelector(state) },
});

const NavbarContainer = connect(
  mapStateToProps,
  null
)(Navbar);

export default NavbarContainer;
