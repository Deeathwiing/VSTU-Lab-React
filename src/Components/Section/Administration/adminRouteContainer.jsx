import { connect } from 'react-redux';
import AdminRoute from './adminRoute';
import {
  addItemsActionCreator,
  deleteItemsActionCreator,
  initializationItemsActionCreator,
} from '../../../redux/actionCreators/ItemsActionCreators';
import {
  deleteUsersActionCreator,
  initializationUsersActionCreator,
} from '../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { items: state.items, users: state.users, user: state.user },
});

const mapDispatchToProps = dispatch => ({
  addItems: (event, picture, title, description, price, tags, rating) => {
    dispatch(addItemsActionCreator(picture, title, description, price, tags, rating));
  },
  deleteItems: (event) => {
    const idToDelete = Number(event.target.getAttribute('data-id'));
    dispatch(deleteItemsActionCreator(idToDelete));
    event.preventDefault();
  },
  deleteUser: (event) => {
    const idToDelete = Number(event.target.getAttribute('data-id'));
    dispatch(deleteUsersActionCreator(idToDelete));
    event.preventDefault();
  },
  initializationUsers: () => {
    dispatch(initializationUsersActionCreator());
  },
  initializationItems: () => {
    dispatch(initializationItemsActionCreator());
  },
});

const AdminRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminRoute);

export default AdminRouteContainer;
