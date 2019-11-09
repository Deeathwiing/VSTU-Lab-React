import { ActionTypes } from '../../ActionTypes';

export const authorizationHasErroredRed = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.AUTHORIZATION_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
};

export const authorizationInProgressRed = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.AUTHORIZATION_IN_PROGRESS:
      return action.isLoading;

    default:
      return state;
  }
};
