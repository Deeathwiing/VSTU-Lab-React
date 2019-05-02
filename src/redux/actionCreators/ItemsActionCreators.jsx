import axios from 'axios';
import { actionTypes } from '../actionTypes';
import { itemsFetchData, itemsHasErrored } from './initAC/initItemsAC';

export const deleteItemsActionCreator = idToDelete => ({
  type: actionTypes.DELETE_ITEMS,
  idToDelete,
});
export const addRatingActionCreator = data => ({
  type: actionTypes.ADD_RATING,
  itemId: data.itemId,
  ratingValue: data.ratingValue,
  user: data.user,
});

export const addItemsAPI = (url, data) => (dispatch) => {
  // async await
  axios
    .post(url, data)
    .then(() => {
      dispatch(itemsFetchData(url));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const addRatingAPI = (url, data) => (dispatch) => {
  // async await

  axios
    .post(url, data)
    .then(() => {
      dispatch(addRatingActionCreator(data));
    })

    .catch(() => dispatch(itemsHasErrored(true)));
};

export const deleteItemsAPI = (url, idToDelete) => (dispatch) => {
  // async await
  axios
    .delete(url)
    .then(() => {
      dispatch(deleteItemsActionCreator(idToDelete));
    })

    .catch(() => dispatch(itemsHasErrored(true)));
};
