import { ActionTypes } from '../ActionTypes';

export const initializationItemsActionCreator = items => ({
  type: ActionTypes.INITIALIZATION_ITEMS,
  items,
});

export const initializationUserActionCreator = user => ({
  type: ActionTypes.INIT_USER,
  user,
});

export const initializationUsersActionCreator = users => ({
  type: ActionTypes.INITIALIZATION_USERS,
  users,
});
