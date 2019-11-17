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
import { deleteUsersAPI } from '../redux/apiActionCreators/usersAC';

const mapStateToProps = state => ({
  state: {
    items: itemsSelector(state),
    users: usersSelector(state),
    user: userSelector(state),
  },
});

const mapDispatchToProps = dispatch => ({
  init: (amount) => {
    dispatch(itemsFetchData(`http://localhost:3002/items/getitems/${amount}`));
  },
  addItems: (picture, title, description, price, tags, amount) => {
    const averageRating = null;
    const data = {
      picture: picture || '',
      title: title || '',
      description: description || '',
      price: price || '',
      tags: tags || '',
      rating: [],
      averageRating,
      amount: amount || '',
    };
    dispatch(addItemsAPI('http://localhost:3002/items/create', data));
  },
  updateItem: (id, picture, title, description, price, tags, amount) => {
    const data = {
      id,
      picture: picture || null,
      title: title || '',
      description: description || '',
      price: price || '',
      tags: tags || '',
      amount: amount || '',
    };
    dispatch(updateItemAPI('http://localhost:3002/items/update', data));
  },
  deleteItems: (event) => {
    event.preventDefault();
    const idToDelete = event.target.getAttribute('data-id');
    dispatch(
      deleteItemsAPI(
        `http://localhost:3002/items/delete/${idToDelete}`,
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
        `http://localhost:3002/users/delete/${idToDelete}`,
        idToDelete
      )
    );
  },
});

const AdminRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRoute);

export default AdminRouteContainer;
