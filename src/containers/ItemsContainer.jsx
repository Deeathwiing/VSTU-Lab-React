import { connect } from 'react-redux';
import Items from '../components/main/section/items/Items';
// eslint-disable-next-line max-len
import { addRatingActionCreator } from '../redux/actionCreators/ItemsActionCreators';
import { itemsSelector, userSelector } from '../selectors/Selectors';

const mapStateToProps = state => ({
  state: {
    items: itemsSelector(state),
    user: userSelector(state),
  },
});

const mapDispatchToProps = dispatch => ({
  addRating: (event, user) => {
    const itemId = Number(event.target.getAttribute('item-id'));
    const ratingValue = event.target.value;
    dispatch(addRatingActionCreator(itemId, ratingValue, user));
  },
});

const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemsContainer;
