import { connect } from 'react-redux';
import Administration from './Administration';
import {
  addItemsActionCreator,
  deleteItemsActionCreator,
} from '../../../redux/reducers/itemsReducer';
import { deleteUsersActionCreator } from '../../../redux/reducers/usersReducer';

const mapStateToProps = state => ({
  state: { items: state.items, users: state.users },
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

const AdministrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Administration);

export default AdministrationContainer;
