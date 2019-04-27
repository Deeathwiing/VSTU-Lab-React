import { connect } from 'react-redux';
import AdminRoute from './adminRoute';
import {
  addItemsActionCreator,
  deleteItemsActionCreator,
} from '../../../../redux/actionCreators/ItemsActionCreators';
import { deleteUsersActionCreator } from '../../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { items: state.items, users: state.users, user: state.user },
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
