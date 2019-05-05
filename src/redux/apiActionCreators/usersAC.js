import axios from 'axios';
import { ActionTypes } from '../ActionTypes';

export const usersHasErrored = bool => ({
  type: ActionTypes.USERS_HAS_ERRORED,
  hasErrored: bool,
});

export const usersIsLoading = bool => ({
  type: ActionTypes.USERS_IS_LOADING,
  isLoading: bool,
});

export const usersFetchDataSuccess = users => ({
  type: ActionTypes.USERS_FETCH_DATA_SUCCESS,
  users,
});

export const usersFetchData = url => async (dispatch) => {
  dispatch(usersIsLoading(true));

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(usersIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(users => dispatch(usersFetchDataSuccess(users)))
    .catch(() => dispatch(usersHasErrored(true)));
};

export const regActionCreatorAPI = (url, data) => (dispatch) => {
  axios
    .post(url, data)
    .then(() => {
      dispatch(usersFetchData(url));
    })
    .catch(() => dispatch(usersHasErrored(true)));
};
