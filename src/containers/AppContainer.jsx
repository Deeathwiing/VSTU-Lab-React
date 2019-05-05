import { connect } from 'react-redux';
import App from '../components/App';
import { usersFetchData } from '../redux/apiActionCreators/usersAC';
import { itemsFetchData } from '../redux/apiActionCreators/itemsAC';

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(usersFetchData('http://localhost:3001/users'));
    dispatch(itemsFetchData('http://localhost:3001/items'));
  },
});

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
