import { ActionTypes } from '../../ActionTypes';

export const itemsHasErroredRed = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.ITEMS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
};

export const itemsIsLoadingRed = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};
