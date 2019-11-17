import { connect } from 'react-redux';
import Items from '../components/main/section/items/Items';
// eslint-disable-next-line max-len
import { itemsSelector, userSelector } from '../selectors/Selectors';
import {
  addRatingAPI,
  itemsFetchData,
} from '../redux/apiActionCreators/itemsAC';

const mapStateToProps = state => ({
  state: {
    items: itemsSelector(state),
    user: userSelector(state),
  },
});

const mapDispatchToProps = dispatch => ({
  init: amount =>
    dispatch(itemsFetchData(`http://localhost:3002/items/getitems/${amount}`)),
  addRating: (event, user) => {
    const itemId = event.target.getAttribute('item-id');
    const ratingValue = event.target.value;
    const data = {
      itemId,
      ratingValue,
      user,
    };
    dispatch(addRatingAPI('http://localhost:3002/items/rating', data));
  },
});

const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemsContainer;
