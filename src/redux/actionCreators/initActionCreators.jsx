import { actionTypes } from '../actionTypes';

export const initializationItemsActionCreator = items => ({
  type: actionTypes.INITIALIZATION_ITEMS,
  items,
});

export const initializationUserActionCreator = user => ({
  type: actionTypes.INIT_USER,
  user,
});

export const initializationUsersActionCreator = users => ({
  type: actionTypes.INITIALIZATION_USERS,
  users,
});
