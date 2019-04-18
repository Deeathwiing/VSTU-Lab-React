const REGISTRATION = 'REGISTRATION';
const DELETE_USERS = 'DELETE-USERS';
const REMOVE_REQUEST = 'REMOVE-REQUEST';
const CHANGE_FIRSTNAMELASTNAME = 'CHANGE_FIRSTNAME';

export const deleteUsersActionCreator = idToDelete => ({
  type: DELETE_USERS,
  idToDelete,
});

export const registrationActionCreator = (email, firstName, lastName, password) => ({
  type: REGISTRATION,
  email,
  firstName,
  lastName,
  password,
});

export const removeRequestActionCreator = () => ({
  type: REMOVE_REQUEST,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
});

export const changeFirstLastNameActionCreator = (firstName, lastName) => ({
  type: CHANGE_FIRSTNAMELASTNAME,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
  firstName,
  lastName,
});
