/* eslint-disable max-len */
import { connect } from 'react-redux';

import AdminRoute from './adminRoute';
import {
  addItemsActionCreator,
  deleteItemsActionCreator,
} from '../../../../redux/actionCreators/ItemsActionCreators';
// eslint-disable-next-line max-len
import { deleteUsersActionCreator } from '../../../../redux/actionCreators/usersActionCreator';
import { addItemsAPI } from '../../../../redux/actionCreators/initAC/initActionCreators';

const mapStateToProps = state => ({
  state: { items: state.items, users: state.users, user: state.user },
});

const mapDispatchToProps = dispatch => ({
  addItems: (picture, title, description, price, tags, rating) => {
    dispatch(
      addItemsActionCreator(picture, title, description, price, tags, rating)
    );

    const Item = {
      id: 100,
      picture: 'gf',
      title: 'fgfgfd',
      description: 'fgfdf',
      price: 'gffg',
      tags: 'fdfdfg',
      rating: [],
      averageRating: 5,
    };
    dispatch(addItemsAPI('http://localhost:3001/items', Item));
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
