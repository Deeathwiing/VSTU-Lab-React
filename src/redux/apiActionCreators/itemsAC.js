import axios from 'axios';
import { ActionTypes } from '../ActionTypes';
import {
  addRatingActionCreator,
  deleteItemsActionCreator,
} from '../actionCreators/ItemsActionCreators';

export const itemsHasErrored = bool => ({
  type: ActionTypes.ITEMS_HAS_ERRORED,
  hasErrored: bool,
});

export const itemsIsLoading = bool => ({
  type: ActionTypes.ITEMS_IS_LOADING,
  isLoading: bool,
});

export const itemsFetchDataSuccess = items => ({
  type: ActionTypes.ITEMS_FETCH_DATA_SUCCESS,
  items,
});

export const itemsFetchData = url => async (dispatch) => {
  dispatch(itemsIsLoading(true));

  try {
    const response = await axios.get(url);

    dispatch(itemsIsLoading(false));

    dispatch(itemsFetchDataSuccess(response.data));
  } catch (err) {
    dispatch(itemsIsLoading(false));
    dispatch(itemsHasErrored(true));
  }
};

export const addItemsAPI = (url, data) => (dispatch) => {
  axios
    .post(url, data)
    .then(() => {
      dispatch(itemsFetchData(url));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const addRatingAPI = (url, data) => (dispatch) => {
  axios
    .post(url, data)
    .then(() => {
      dispatch(addRatingActionCreator(data));
    })

    .catch(() => dispatch(itemsHasErrored(true)));
};

export const deleteItemsAPI = (url, idToDelete) => (dispatch) => {
  axios
    .delete(url)
    .then(() => {
      dispatch(deleteItemsActionCreator(idToDelete));
    })

    .catch(() => dispatch(itemsHasErrored(true)));
};
