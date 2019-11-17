import { connect } from 'react-redux';
import App from '../components/App';
import { usersFetchData } from '../redux/apiActionCreators/usersAC';

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(usersFetchData('http://localhost:3002/users/getusers'));
  },
});

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
