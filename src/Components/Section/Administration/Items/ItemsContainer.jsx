import { connect } from 'react-redux';
import { addRatingActionCreator } from '../../../../redux/reducers/itemsReducer';
import Items from './Items';

const mapStateToProps = state => ({
  state: { items: state.items },
});

const mapDispatchToProps = dispatch => ({
  addRating: (event) => {
    const itemId = Number(event.target.getAttribute('item-id'));
    const ratingValue = Number(event.target.getAttribute('rating-value'));
    dispatch(addRatingActionCreator(itemId, ratingValue));
  },
});

const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Items);

export default ItemsContainer;
