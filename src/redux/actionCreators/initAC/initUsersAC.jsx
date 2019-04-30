import { actionTypes } from '../../actionTypes';

export const initializationUsersActionCreator = users => ({
  type: actionTypes.INITIALIZATION_USERS,
  users,
});

export const usersHasErrored = bool => ({
  type: actionTypes.USERS_HAS_ERRORED,
  hasErrored: bool,
});

export const usersIsLoading = bool => ({
  type: actionTypes.USERS_IS_LOADING,
  isLoading: bool,
});

export const usersFetchDataSuccess = users => ({
  type: actionTypes.USERS_FETCH_DATA_SUCCESS,
  users,
});

export const usersFetchData = url => (dispatch) => {
  dispatch(usersIsLoading(true));

  // async await
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
