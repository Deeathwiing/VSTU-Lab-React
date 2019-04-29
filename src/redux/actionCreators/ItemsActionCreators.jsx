import { actionTypes } from '../actionTypes';

export const addItemsActionCreator = (
  picture,
  title,
  description,
  price,
  tags,
  rating
) => ({
  type: actionTypes.ADD_ITEMS,
  newPicture: picture,
  newTitle: title,
  newDescription: description,
  newPrice: price,
  newTags: tags,
  newRating: rating,
});
export const deleteItemsActionCreator = idToDelete => ({
  type: actionTypes.DELETE_ITEMS,
  idToDelete,
});
export const addRatingActionCreator = (itemId, ratingValue) => ({
  type: actionTypes.ADD_RATING,
  itemId,
  ratingValue,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : [],
});
