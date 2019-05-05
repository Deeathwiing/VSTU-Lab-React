/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { ActionTypes } from '../ActionTypes';

const ItemsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.DELETE_ITEMS:
      const newStateAfterDelete = state.filter(
        item => item._id !== action.idToDelete
      );

      return newStateAfterDelete;

    case ActionTypes.ADD_RATING:
      const { user } = action;
      const personalRating = {
        user: user.logEmail,
        ratingValue: action.ratingValue,
      };

      const newStateAfterAddRating = state.map((item) => {
        if (item._id === action.itemId) {
          const singleRating = item.rating;
          let checkRating = false;
          if (singleRating[0]) {
            singleRating.forEach((element, i, rating) => {
              if (element.user === user.logEmail) {
                rating[i] = personalRating;
                checkRating = true;
              }
            });
            if (!checkRating) {
              singleRating.push(personalRating);
            }
          } else singleRating.push(personalRating);

          item.rating = singleRating;

          const ratingValueArr = item.rating.map(element =>
            Number(element.ratingValue));

          // eslint-disable-next-line max-len
          const nextAverageRating = ratingValueArr.reduce((sum, current) => sum + current)
            / ratingValueArr.length;

          item.averageRating = Math.round(nextAverageRating);
        }
        return item;
      });

      return newStateAfterAddRating;

    case ActionTypes.ITEMS_FETCH_DATA_SUCCESS:
      return action.items;
    default:
      return state;
  }
};

export default ItemsReducer;
