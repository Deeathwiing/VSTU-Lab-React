import { ActionTypes } from '../ActionTypes';

export const deleteUsersActionCreator = idToDelete => ({
  type: ActionTypes.DELETE_USERS,
  idToDelete,
});

export const registrationActionCreator = (
  email,
  firstName,
  lastName,
  password
) => ({
  type: ActionTypes.REGISTRATION,
  email,
  firstName,
  lastName,
  password,
});

export const deleteUsersStateActionCreator = () => ({
  type: ActionTypes.DELETE_STATE_USERS,
});
