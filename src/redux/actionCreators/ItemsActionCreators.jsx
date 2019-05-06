import { ActionTypes } from '../ActionTypes';

export const deleteItemsActionCreator = idToDelete => ({
  type: ActionTypes.DELETE_ITEMS,
  idToDelete,
});

export const addRatingActionCreator = data => ({
  type: ActionTypes.ADD_RATING,
  itemId: data.itemId,
  ratingValue: data.ratingValue,
  user: data.user,
});
