import axios from 'axios';
import { ActionTypes } from '../ActionTypes';

export const authorizationHasErrored = bool => ({
  type: ActionTypes.AUTHORIZATION_HAS_ERRORED,
  hasErrored: bool,
});

export const authorizationInProgress = bool => ({
  type: ActionTypes.AUTHORIZATION_IN_PROGRESS,
  isLoading: bool,
});

export const authorizationSuccess = user => ({
  type: ActionTypes.AUTHORIZATION_SUCCESS,
  user,
});

export const authorization = (url, data) => (dispatch) => {
  axios
    .post(url, data, { withCredentials: true })
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw Error(response.statusText);
      }
      dispatch(authorizationSuccess(response.data));
    })
    .catch((err) => {
      dispatch(authorizationHasErrored(true));
    });
};
