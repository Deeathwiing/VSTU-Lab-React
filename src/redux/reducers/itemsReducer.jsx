/* eslint-disable no-case-declarations */
const ADD_ITEMS = 'ADD-ITEMS';
const DELETE_ITEMS = 'DELETE-ITEMS';
const ADD_RATING = 'ADD-RATING';

const initialState = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],

const itemsReducer = (state = initialState, action) => {
  // Должно придти items,user,
  switch (action.type) {
    case ADD_ITEMS:
      class Item {
        constructor(id, picture, title, description, price, tags, rating) {
          this.id = id;
          this.picture = picture;
          this.title = title;
          this.description = description;
          this.price = price;
          this.tags = tags;
          this.rating = rating;
        }
      }

      const stateLength = state.length;
      const lastElement = state[stateLength - 1];

      const id = lastElement ? lastElement.id + 1 : 0;

      const newItem = new Item(
        id,
        action.newPicture,
        action.newTitle,
        action.newDescription,
        action.newPrice,
        action.newTags,
        action.newRating,
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
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
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
        }
        return item;
      });
      localStorage.setItem('items', JSON.stringify(newStateAfterAddRating));

      return newStateAfterAddRating;
    default:
      return state;
  }
};

export const addItemsActionCreator = (picture, title, description, price, tags, rating) => ({
  type: ADD_ITEMS,
  newPicture: picture,
  newTitle: title,
  newDescription: description,
  newPrice: price,
  newTags: tags,
  newRating: rating,
});
export const deleteItemsActionCreator = idToDelete => ({
  type: DELETE_ITEMS,
  idToDelete,
});
export const addRatingActionCreator = (itemId, ratingValue) => ({
  type: ADD_RATING,
  itemId,
  ratingValue,
});
export default itemsReducer;