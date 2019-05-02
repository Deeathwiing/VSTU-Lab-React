import axios from 'axios';
import { actionTypes } from '../actionTypes';
import { usersFetchData, usersHasErrored } from './initAC/initUsersAC';

export const deleteUsersActionCreator = idToDelete => ({
  type: actionTypes.DELETE_USERS,
  idToDelete,
});

export const registrationActionCreator = (
  email,
  firstName,
  lastName,
  password
) => ({
  type: actionTypes.REGISTRATION,
  email,
  firstName,
  lastName,
  password,
});

export const regACAPI = (url, data) => (dispatch) => {
  // async await
  axios
    .post(url, data)
    .then(() => {
      dispatch(usersFetchData(url));
    })
    .catch(() => dispatch(usersHasErrored(true)));
};

export const removeRequestActionCreator = () => ({
  type: actionTypes.REMOVE_REQUEST,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : [],
});

export const changeFirstLastNameActionCreator = (firstName, lastName) => ({
  type: actionTypes.CHANGE_FIRSTNAMELASTNAME,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : [],
  firstName,
  lastName,
});
