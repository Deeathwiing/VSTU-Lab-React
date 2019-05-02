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

export const removeRequestActionCreator = () => ({
  type: ActionTypes.REMOVE_REQUEST,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : [],
});

export const changeFirstLastNameActionCreator = (
  firstName,
  lastName,
  user
) => ({
  type: ActionTypes.CHANGE_FIRSTNAMELASTNAME,
  user,
  firstName,
  lastName,
});
