import { connect } from 'react-redux';
// eslint-disable-next-line max-len
// eslint-disable-next-line max-len
import AdminRoute from '../components/main/section/administration/AdminRoute';
import {
  itemsSelector,
  usersSelector,
  userSelector,
} from '../selectors/Selectors';
import {
  deleteItemsAPI,
  addItemsAPI,
  itemsFetchData,
  updateItemAPI,
} from '../redux/apiActionCreators/itemsAC';
import {
  usersFetchData,
  deleteUsersAPI,
  addAdminAPI,
} from '../redux/apiActionCreators/usersAC';

const mapStateToProps = state => ({
  state: {
    items: itemsSelector(state),
    users: usersSelector(state),
    user: userSelector(state),
  },
});

const mapDispatchToProps = dispatch => ({
  getProducts: (amount, page) => {
    dispatch(
      itemsFetchData(
        `http://localhost:3002/items/getProducts?amount=${amount}&withImg=false&sortByName=false&sortByDate=false&page=${page}`
      )
    );
  },
  getUsers: (amount, page) => {
    dispatch(
      usersFetchData(
        `http://localhost:3002/users/getusers?amount=${amount}&page=${page}`
      )
    );
  },
  addItems: (picture, title, description, price, tags, amount) => {
    const data = {
      picture: picture || '',
      title: title || '',
      description: description || '',
      price: price || '',
      tags: tags || '',
      amount: amount || '',
    };
    const formData = new FormData();

    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      formData.append(key, data[key]);
    }
    dispatch(addItemsAPI('http://localhost:3002/items/create', formData));
  },
  updateItem: (id, picture, title, description, price, tags, amount) => {
    const data = {
      id,
      picture: picture || 'null',
      title: title || 'none',
      description: description || 'none',
      price: price || 'none',
      tags: tags || 'none',
      amount: amount || 'none',
    };

    const formData = new FormData();

    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      formData.append(key, data[key]);
    }

    dispatch(updateItemAPI('http://localhost:3002/items/update', formData));
  },
  deleteItems: (event) => {
    event.preventDefault();
    const idToDelete = event.target.getAttribute('data-id');
    dispatch(
      deleteItemsAPI(
        `http://localhost:3002/items/delete?id=${idToDelete}`,
        idToDelete
      )
    );
    event.preventDefault();
  },
  deleteUser: (event) => {
    event.preventDefault();
    const idToDelete = event.target.getAttribute('data-id');
    dispatch(
      deleteUsersAPI(
        `http://localhost:3002/users/delete?id=${idToDelete}`,
        idToDelete
      )
    );
  },
  addAdmin: (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    dispatch(addAdminAPI(`http://localhost:3002/users/addadmin?id=${id}`));
  },
  deleteAdmin: (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    dispatch(addAdminAPI(`http://localhost:3002/users/deleteadmin?id=${id}`));
  },
});

const AdminRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRoute);

export default AdminRouteContainer;
