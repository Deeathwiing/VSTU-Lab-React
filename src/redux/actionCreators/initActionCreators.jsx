const INITIALIZATION_ITEMS = 'INITIALIZATION_ITEMS';
const INIT_USER = 'INIT_USER';
const INITIALIZATION_USERS = 'INITIALIZATION_USERS';

export const initializationItemsActionCreator = items => ({
  type: INITIALIZATION_ITEMS,
  items,
});

export const initializationUserActionCreator = user => ({
  type: INIT_USER,
  user,
});

export const initializationUsersActionCreator = users => ({
  type: INITIALIZATION_USERS,
  users,
});

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
}

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
