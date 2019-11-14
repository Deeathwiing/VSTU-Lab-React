import axios from 'axios';
import { ActionTypes } from '../ActionTypes';
import {
  deleteUsersActionCreator,
  removeRequestActionCreator,
  changeFirstLastNameActionCreator,
} from '../actionCreators/UsersActionCreator';

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
      dispatch(usersFetchData('http://localhost:3001/users/getusers'));
    })
    .catch(() => dispatch(usersHasErrored(true)));
};

export const deleteUsersAPI = (url, idToDelete) => (dispatch) => {
  axios
    .delete(url)
    .then(() => {
      dispatch(deleteUsersActionCreator(idToDelete));
    })

    .catch(() => dispatch(usersHasErrored(true)));
};

export const removeRequestAPI = (url, data) => (dispatch) => {
  dispatch(usersIsLoading(true));
  axios
    .post(url, data)
    .then(() => {
      dispatch(usersIsLoading(false));
      removeRequestActionCreator(data);
    })
    .catch(() => {
      dispatch(usersIsLoading(false));
      dispatch(usersHasErrored(true));
    });
};

export const editNamesAPI = (url, data) => (dispatch) => {
  dispatch(usersIsLoading(true));
  axios
    .post(url, data)
    .then(() => {
      dispatch(usersIsLoading(false));
      dispatch(changeFirstLastNameActionCreator(data));
    })
    .catch(() => {
      dispatch(usersIsLoading(false));
      dispatch(usersHasErrored(true));
    });
};
