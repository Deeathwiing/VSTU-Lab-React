const ADD_ITEMS = 'ADD-ITEMS';
const DELETE_ITEMS = 'DELETE-ITEMS';
const ADD_RATING = 'ADD-RATING';
const INITIALIZATION_ITEMS = 'INITIALIZATION_ITEMS';

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
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
});

export const initializationItemsActionCreator = () => ({
  type: INITIALIZATION_ITEMS,
});