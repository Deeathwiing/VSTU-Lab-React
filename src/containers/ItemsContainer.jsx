import { connect } from 'react-redux';
import Items from '../components/main/section/items/Items';
// eslint-disable-next-line max-len
import { itemsSelector, userSelector } from '../selectors/Selectors';
import {
  addRatingAPI,
  itemsFetchData,
} from '../redux/apiActionCreators/itemsAC';
import { deleteItemsStateActionCreator } from '../redux/actionCreators/ItemsActionCreators';

const mapStateToProps = state => ({
  state: {
    items: itemsSelector(state),
    user: userSelector(state),
  },
});

const mapDispatchToProps = dispatch => ({
  init: (amount, withImg, sortByName, sortByDate, page) => {
    console.log(`page ${page}`);

    dispatch(
      itemsFetchData(
        `http://localhost:3002/items/getProducts?amount=${amount}&withImg=${withImg}&sortByName=${sortByName}&sortByDate=${sortByDate}&page=${page}`
      )
    );
  },
  deleteStateItems: () => {
    dispatch(deleteItemsStateActionCreator());
  },
  addRating: (event) => {
    const itemId = event.target.getAttribute('item-id');
    const ratingValue = event.target.value;
    const data = {
      itemId,
      ratingValue,
    };
    console.log(data);
    dispatch(addRatingAPI('http://localhost:3002/items/rating', data));
  },
});

const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemsContainer;
