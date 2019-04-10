/* eslint-disable no-case-declarations */
const ADD_ITEMS = 'ADD-ITEMS';
const DELETE_ITEMS = 'DELETE-ITEMS';
const ADD_RATING = 'ADD-RATING';
const itemsReducer = (state, action) => {
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

      const lastElement = state.items[state.items.length - 1];
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

      state.items.push(newItem);
      localStorage.setItem('items', JSON.stringify(state.items));
      return state.items;
    case DELETE_ITEMS:
      const check = (item) => {
        if (item.id !== action.idToDelete) {
          return true;
        }
        return false;
      };
      state.items = state.items.filter(item => check(item));

      localStorage.setItem('items', JSON.stringify(state.items));
      return state.items;

    case ADD_RATING:
      const user = state.user;
      const personalRating = {
        user: user.logEmail,
        ratingValue: action.ratingValue,
      };

      state.items = state.items.map((item) => {
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
      localStorage.setItem('items', JSON.stringify(state.items));

      return state.items;
    default:
      return state.items;
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
export const ratingActionCreator = (itemId, ratingValue) => ({
  type: ADD_RATING,
  itemId,
  ratingValue,
});
export default itemsReducer;
