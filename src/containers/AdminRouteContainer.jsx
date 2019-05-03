import { connect } from 'react-redux';

import {
  addItemsActionCreator,
  deleteItemsActionCreator,
} from '../redux/actionCreators/ItemsActionCreators';
// eslint-disable-next-line max-len
import { deleteUsersActionCreator } from '../redux/actionCreators/UsersActionCreator';
import AdminRoute from '../components/main/section/administration/AdminRoute';
import { getItems, getUsers, getUser } from '../takes/Takes';

const mapStateToProps = state => ({
  state: {
    items: getItems(state),
    users: getUsers(state),
    user: getUser(state),
  },
});

const mapDispatchToProps = dispatch => ({
  addItems: (picture, title, description, price, tags, rating) => {
    dispatch(
      addItemsActionCreator(picture, title, description, price, tags, rating)
    );
  },
  deleteItems: (event) => {
    event.preventDefault();
    const idToDelete = Number(event.target.getAttribute('data-id'));
    dispatch(deleteItemsActionCreator(idToDelete));
    event.preventDefault();
  },
  deleteUser: (event) => {
    event.preventDefault();
    const idToDelete = Number(event.target.getAttribute('data-id'));
    dispatch(deleteUsersActionCreator(idToDelete));
  },
});

const AdminRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRoute);

export default AdminRouteContainer;
