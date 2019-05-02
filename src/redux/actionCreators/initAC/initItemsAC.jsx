import { actionTypes } from '../../actionTypes';

export const initializationItemsActionCreator = items => ({
  type: actionTypes.INITIALIZATION_ITEMS,
  items,
});

export const initializationUserActionCreator = user => ({
  type: actionTypes.INIT_USER,
  user,
});

export const itemsHasErrored = bool => ({
  type: actionTypes.ITEMS_HAS_ERRORED,
  hasErrored: bool,
});

export const itemsIsLoading = bool => ({
  type: actionTypes.ITEMS_IS_LOADING,
  isLoading: bool,
});

export const itemsFetchDataSuccess = items => ({
  type: actionTypes.ITEMS_FETCH_DATA_SUCCESS,
  items,
});

export const itemsFetchData = url => (dispatch) => {
  dispatch(itemsIsLoading(true));

  // async await
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(itemsFetchDataSuccess(items)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

/* export const itemsFetchData = url => (dispatch) => {
  dispatch(itemsIsLoading(true));

  // async await
  axios
    .get(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(itemsFetchDataSuccess(items)))
    .catch(() => dispatch(itemsHasErrored(true)));
}; */