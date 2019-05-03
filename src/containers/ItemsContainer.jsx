import { connect } from 'react-redux';
import Items from '../components/main/section/items/Items';
// eslint-disable-next-line max-len
import { addRatingActionCreator } from '../redux/actionCreators/ItemsActionCreators';
import { getItems, getUser } from '../takes/Takes';

const mapStateToProps = state => ({
  state: {
    items: getItems(state),
    user: getUser(state),
  },
});

const mapDispatchToProps = dispatch => ({
  addRating: (event) => {
    const itemId = Number(event.target.getAttribute('item-id'));
    const ratingValue = event.target.value;
    dispatch(addRatingActionCreator(itemId, ratingValue));
  },
});

const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemsContainer;
