/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { actionTypes } from '../actionTypes';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEMS:
      const stateLength = state.length;
      const lastElement = state[stateLength - 1];

      const id = lastElement ? lastElement.id + 1 : 0;
      const averageRating = null;
      const newItem = {
        id,
        picture: action.newPicture || '',
        title: action.newTitle || '',
        description: action.newDescription || '',
        price: action.newPrice || '',
        tags: action.newTags || [],
        rating: [],
        averageRating,
      };
      let newStateAfterAddItems;
      if (lastElement) {
        newStateAfterAddItems = [...state, newItem];
      } else {
        newStateAfterAddItems = [newItem];
      }

      localStorage.setItem('items', JSON.stringify(newStateAfterAddItems));
      return newStateAfterAddItems;
    case actionTypes.DELETE_ITEMS:
      const newStateAfterDelete = state.filter(
        item => item.id !== action.idToDelete
      );
      localStorage.setItem('items', JSON.stringify(newStateAfterDelete));
      return newStateAfterDelete;

    case actionTypes.ADD_RATING:
      const { user } = action;
      const personalRating = {
        user: user.logEmail,
        ratingValue: action.ratingValue,
      };

      const newStateAfterAddRating = state.map((item) => {
        if (item.id === action.itemId) {
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
      localStorage.setItem('items', JSON.stringify(newStateAfterAddRating));

      return newStateAfterAddRating;

    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;

    case actionTypes.INITIALIZATION_ITEMS:
      return action.items || [];
    default:
      return state;
  }
};

export default itemsReducer;
