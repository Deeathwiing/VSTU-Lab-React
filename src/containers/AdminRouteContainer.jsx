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
  addItems: (picture, title, description, price, tags) => {
    const averageRating = null;
    const data = {
      picture: picture || '',
      title: title || '',
      description: description || '',
      price: price || '',
      tags: tags || '',
      rating: [],
      averageRating,
    };
    dispatch(addItemsAPI('http://localhost:3001/items', data));
  },
  deleteItems: (event) => {
    event.preventDefault();
    const idToDelete = event.target.getAttribute('data-id');
    dispatch(
      deleteItemsAPI(`http://localhost:3001/items/${idToDelete}`, idToDelete)
    );
    event.preventDefault();
  },
  deleteUser: (event) => {
    event.preventDefault();
    const idToDelete = event.target.getAttribute('data-id');
    dispatch(
      deleteUsersAPI(`http://localhost:3001/users/${idToDelete}`, idToDelete)
    );
  },
});

const AdminRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRoute);

export default AdminRouteContainer;
