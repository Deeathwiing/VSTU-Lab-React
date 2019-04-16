import { connect } from 'react-redux';
import {
  addItemsActionCreator,
  deleteItemsActionCreator,
} from '../../../redux/reducers/itemsReducer';
import { deleteUsersActionCreator } from '../../../redux/reducers/usersReducer';
import AdminRoute from './adminRoute';

const mapStateToProps = state => ({
  state: { items: state.items, users: state.users, user: state.user },
});

const mapDispatchToProps = dispatch => ({
  addItems: (event, picture, title, description, price, tags, rating) => {
    dispatch(addItemsActionCreator(picture, title, description, price, tags, rating));
    event.preventDefault();
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
});

const AdminRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminRoute);

export default AdminRouteContainer;
