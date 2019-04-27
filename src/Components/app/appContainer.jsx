import { connect } from 'react-redux';
import {
  initializationItemsActionCreator,
  initializationUsersActionCreator,
  initializationUserActionCreator,
} from '../../redux/actionCreators/initActionCreators';
import App from './app';

const mapDispatchToProps = dispatch => ({
  init: (items, users, user) => {
    dispatch(initializationItemsActionCreator(items));

    dispatch(initializationUsersActionCreator(users));

    dispatch(initializationUserActionCreator(user));
  },
});

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
