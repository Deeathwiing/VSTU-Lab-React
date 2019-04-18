import { connect } from 'react-redux';
import Items from './Items';
import { addRatingActionCreator } from '../../../../redux/actionCreators/ItemsActionCreators';

const mapStateToProps = state => ({
  state: { items: state.items, user: state.user },
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
  mapDispatchToProps,
)(Items);

export default ItemsContainer;
