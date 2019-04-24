const ADD_ITEMS = 'ADD-ITEMS';
const DELETE_ITEMS = 'DELETE-ITEMS';
const ADD_RATING = 'ADD-RATING';
const INITIALIZATION_ITEMS = 'INITIALIZATION_ITEMS';

export const addItemsActionCreator = (picture, title, description, price, tags, rating) => ({
  type: ADD_ITEMS,
  newPicture: picture,
  newTitle: title,
  newDescription: description,
  newPrice: price,
  newTags: tags,
  newRating: rating,
});
export const deleteItemsActionCreator = idToDelete => ({
  type: DELETE_ITEMS,
  idToDelete,
});
export const addRatingActionCreator = (itemId, ratingValue) => ({
  type: ADD_RATING,
  itemId,
  ratingValue,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
});

export const initializationItemsActionCreator = items => ({
  type: INITIALIZATION_ITEMS,
  items,
});

// data AC

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
