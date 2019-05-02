/* eslint-disable max-len */
import { connect } from 'react-redux';

import AdminRoute from './adminRoute';
import {
  addItemsAPI,
  deleteItemsAPI,
} from '../../../../redux/actionCreators/ItemsActionCreators';
import { deleteUsersActionCreator } from '../../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { items: state.items, users: state.users, user: state.user },
});

const mapDispatchToProps = dispatch => ({
  addItems: (picture, title, description, price, tags) => {
    const averageRating = null;
    const Item = {
      picture: picture || '',
      title: title || '',
      description: description || '',
      price: price || '',
      tags: tags || '',
      rating: [],
      averageRating,
    };
    dispatch(addItemsAPI('http://localhost:3001/items', Item));
  },
  deleteItems: (event) => {
    const idToDelete = event.target.getAttribute('data-id');
    dispatch(deleteItemsAPI(`http://localhost:3001/items/${idToDelete}`));
  },
  deleteUser: (event) => {
    const idToDelete = Number(event.target.getAttribute('data-id'));
    dispatch(deleteUsersActionCreator(idToDelete));
  },
});

const AdminRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRoute);

export default AdminRouteContainer;
