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

    console.log(response.data);

    dispatch(itemsFetchDataSuccess(response.data));
  } catch (err) {
    dispatch(itemsIsLoading(false));

    dispatch(itemsHasErrored(true));
  }
};

export const addItemsAPI = (url, data) => (dispatch) => {
  axios
    .post(url, data, {
      withCredentials: true,
      headers: {
        //   // 'content-type': 'multipart/form-data; boundary=1',
        //   // 'content-type': 'undefined',
        enctype: 'multipart/form-data',
        // 'content-type': 'multipart/form-data; boundary=322',
      },
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const updateItemAPI = (url, data) => (dispatch) => {
  axios
    .patch(url, data, {
      withCredentials: true,
      headers: {
        //   // 'content-type': 'multipart/form-data; boundary=1',
        //   // 'content-type': 'undefined',
        enctype: 'multipart/form-data',
        // 'content-type': 'multipart/form-data; boundary=322',
      },
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const addRatingAPI = (url, data) => (dispatch) => {
  axios
    .post(
      url,
      { itemId: data.itemId, ratingValue: data.ratingValue },
      { withCredentials: true }
    )
    .then(() => {
      dispatch(addRatingActionCreator(data));
    })

    .catch(() => dispatch(itemsHasErrored(true)));
};

export const deleteItemsAPI = (url, idToDelete) => (dispatch) => {
  axios
    .delete(url, { withCredentials: true })
    .then(() => {
      dispatch(deleteItemsActionCreator(idToDelete));
    })

    .catch(() => dispatch(itemsHasErrored(true)));
};
