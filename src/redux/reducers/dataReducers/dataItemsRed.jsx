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
