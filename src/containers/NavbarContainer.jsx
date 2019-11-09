import { connect } from 'react-redux';
import Navbar from '../components/header/navbar/Navbar';
import { userSelector } from '../selectors/Selectors';

const mapStateToProps = state => ({
  state: { user: userSelector(state) },
});

const mapDispatchToProps = dispatch => ({
  search: (event) => {},
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Navbar);

export default NavbarContainer;
