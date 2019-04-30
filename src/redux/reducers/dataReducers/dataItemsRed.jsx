import { actionTypes } from '../../actionTypes';

export const itemsHasErroredRed = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ITEMS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
};

export const itemsIsLoadingRed = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

export const usersHasErroredRed = (state = false, action) => {
  switch (action.type) {
    case actionTypes.USERS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
};

export const usersIsLoadingRed = (state = false, action) => {
  switch (action.type) {
    case actionTypes.USERS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};
