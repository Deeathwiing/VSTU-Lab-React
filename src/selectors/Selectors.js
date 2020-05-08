import { createSelector } from 'reselect';

export const itemsSelector = state => state.items;
export const usersSelector = state => state.users;
export const usersLengthSelector = state => state.users.length;
export const userSelector = state => state.user;
export const messagesSelector = state => state.messages;
export const usersHasErrored = state => state.usersHasErrored;

export const hightRating = createSelector(
  [itemsSelector],
  items =>
    items.filter((element) => {
      if (element.averageRating === 5) {
        return true;
      }
      return false;
    })
);

/* export const hightRating = (state) => {
  let { items } = state;
  items = items.filter((element) => {
    if (element.averageRating === 5) {
      return true;
    }
    return false;
  });
  return items;
}; */
