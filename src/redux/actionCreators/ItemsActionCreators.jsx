import { ActionTypes } from '../ActionTypes';

export const addItemsActionCreator = (
  picture,
  title,
  description,
  price,
  tags,
  rating
) => ({
  type: ActionTypes.ADD_ITEMS,
  newPicture: picture,
  newTitle: title,
  newDescription: description,
  newPrice: price,
  newTags: tags,
  newRating: rating,
});
export const deleteItemsActionCreator = idToDelete => ({
  type: ActionTypes.DELETE_ITEMS,
  idToDelete,
});
export const addRatingActionCreator = (itemId, ratingValue, user) => ({
  type: ActionTypes.ADD_RATING,
  itemId,
  ratingValue,
  user,
});
