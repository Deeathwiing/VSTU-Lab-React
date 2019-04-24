/* eslint-disable no-case-declarations */
const ADD_ITEMS = 'ADD-ITEMS';
const DELETE_ITEMS = 'DELETE-ITEMS';
const ADD_RATING = 'ADD-RATING';
const INITIALIZATION_ITEMS = 'INITIALIZATION_ITEMS';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMS:
      class Item {
        constructor(id, picture, title, description, price, tags, rating, averageRating) {
          this.id = id;
          this.picture = picture;
          this.title = title;
          this.description = description;
          this.price = price;
          this.tags = tags;
          this.rating = rating;
          this.averageRating = averageRating;
        }
      }

      const stateLength = state.length;
      const lastElement = state[stateLength - 1];

      const id = lastElement ? lastElement.id + 1 : 0;
      const averageRating = null;
      const newItem = new Item(
        id,
        action.newPicture,
        action.newTitle,
        action.newDescription,
        action.newPrice,
        action.newTags,
        action.newRating,
        averageRating,
      );

      const newStateAfterAddItems = [...state, newItem];
      localStorage.setItem('items', JSON.stringify(newStateAfterAddItems));
      return newStateAfterAddItems;
    case DELETE_ITEMS:
      const check = (item) => {
        if (item.id !== action.idToDelete) {
          return true;
        }
        return false;
      };
      const newStateAfterDelete = state.filter(item => check(item));
      localStorage.setItem('items', JSON.stringify(newStateAfterDelete));
      return newStateAfterDelete;

    case ADD_RATING:
      const user = action.user;
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

          const ratingValueArr = item.rating.map(element => Number(element.ratingValue));

          const nextAverageRating = ratingValueArr.reduce((sum, current) => sum + current) / ratingValueArr.length;

          item.averageRating = Math.round(nextAverageRating);
        }
        return item;
      });
      localStorage.setItem('items', JSON.stringify(newStateAfterAddRating));

      return newStateAfterAddRating;

    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;

    case INITIALIZATION_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;
