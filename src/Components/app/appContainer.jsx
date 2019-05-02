import { connect } from 'react-redux';
import {
  initializationUserActionCreator,
  itemsFetchData,
} from '../../redux/actionCreators/initAC/initItemsAC';
import App from './app';
// eslint-disable-next-line max-len
import { usersFetchData } from '../../redux/actionCreators/initAC/initUsersAC';

const mapDispatchToProps = dispatch => ({
  init: (user) => {
    dispatch(usersFetchData('http://localhost:3001/users'));

    dispatch(initializationUserActionCreator(user));

    dispatch(itemsFetchData('http://localhost:3001/items'));
  },
});

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
