import { connect } from 'react-redux';
import Items from './items';
// eslint-disable-next-line max-len
import { addRatingAPI } from '../../../../redux/actionCreators/ItemsActionCreators';

const mapStateToProps = state => ({
  state: {
    items: state.items,
    user: state.user,
  },
});

const mapDispatchToProps = dispatch => ({
  addRating: (event) => {
    const itemId = event.target.getAttribute('item-id');
    const ratingValue = event.target.value;
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : [];
    const data = {
      itemId,
      ratingValue,
      user,
    };
    dispatch(addRatingAPI('http://localhost:3001/rating', data));
  },
});

const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default ItemsContainer;
