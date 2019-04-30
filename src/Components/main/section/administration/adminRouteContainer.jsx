/* eslint-disable max-len */
import { connect } from 'react-redux';

import AdminRoute from './adminRoute';
import {
  addItemsActionCreator,
  deleteItemsActionCreator,
} from '../../../../redux/actionCreators/ItemsActionCreators';
// eslint-disable-next-line max-len
import { deleteUsersActionCreator } from '../../../../redux/actionCreators/usersActionCreator';
import {
  addItemsAPI,
  deleteItemsAPI,
} from '../../../../redux/actionCreators/initAC/initActionCreators';

const mapStateToProps = state => ({
  state: { items: state.items, users: state.users, user: state.user },
});

const mapDispatchToProps = dispatch => ({
  addItems: (picture, title, description, price, tags) => {
    dispatch(addItemsActionCreator(picture, title, description, price, tags));
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
    dispatch(deleteItemsActionCreator(idToDelete));
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
