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

export const removeRequestActionCreator = user => ({
  type: ActionTypes.REMOVE_REQUEST,
  user,
});

export const changeFirstLastNameActionCreator = data => ({
  type: ActionTypes.CHANGE_FIRSTNAMELASTNAME,
  user: data.user,
  firstName: data.firstName,
  lastName: data.lastName,
});
