import { connect } from 'react-redux';
import {
  initializationItemsActionCreator,
  initializationUsersActionCreator,
  initializationUserActionCreator,
} from '../redux/actionCreators/InitActionCreators';
import App from '../components/app/App';

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
