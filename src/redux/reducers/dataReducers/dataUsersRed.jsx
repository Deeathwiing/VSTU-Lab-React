import { ActionTypes } from '../../ActionTypes';

export const usersHasErroredRed = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.USERS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
};

export const usersIsLoadingRed = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.USERS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};
