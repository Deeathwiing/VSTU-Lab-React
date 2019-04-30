import { connect } from 'react-redux';
import {
  initializationUsersActionCreator,
  initializationUserActionCreator,
  itemsFetchData,
} from '../../redux/actionCreators/initAC/initActionCreators';
import App from './app';

const mapDispatchToProps = dispatch => ({
  init: (items, users, user) => {
    dispatch(initializationUsersActionCreator(users));

    dispatch(initializationUserActionCreator(user));

    dispatch(itemsFetchData('http://localhost:3001/items'));
  },
});

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
