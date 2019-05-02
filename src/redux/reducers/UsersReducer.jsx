/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { ActionTypes } from '../ActionTypes';

const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.REGISTRATION:
      const lastElement = state[state.length - 1];
      const id = lastElement ? lastElement.id + 1 : 0;
      let isTaken = false;
      if (lastElement) {
        isTaken = state.some(user => user.email === action.email);
      }
      if (isTaken) {
        alert('Данный email занят');
        return state;
      }

      if (!action.firstName || !action.lastName || !action.password) {
        alert('Заполните все поля');
        return state;
      }

      const newUser = {
        id,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        password: action.password,
        deleteAccountRequest: false,
        administration: false,
      };

      let newStateAfterRegistration = [];

      if (lastElement) {
        newStateAfterRegistration = [...state, newUser];
      } else {
        newStateAfterRegistration = [newUser];
      }
      localStorage.setItem('users', JSON.stringify(newStateAfterRegistration));
      return newStateAfterRegistration;

    case ActionTypes.DELETE_USERS:
      const newStateAfterDelete = state.filter((user) => {
        if (user.id === action.idToDelete && user.deleteAccountRequest) {
          return false;
        }
        return true;
      });

      localStorage.setItem('users', JSON.stringify(newStateAfterDelete));
      return newStateAfterDelete;

    case ActionTypes.REMOVE_REQUEST:
      const { user } = action;
      const email = user.logEmail;
      const newStateAfterRemoveRequest = state.map((element) => {
        if (element.email === email) {
          element.deleteAccountRequest = true;
          return element;
        }
        return element;
      });

      localStorage.setItem('users', JSON.stringify(newStateAfterRemoveRequest));

      return newStateAfterRemoveRequest;

    case ActionTypes.CHANGE_FIRSTNAMELASTNAME:
      const userChangeName = action.user;
      const emailChangeName = userChangeName.logEmail;
      const newStateAfterChange = state.map((element) => {
        if (element.email === emailChangeName) {
          element.firstName = action.firstName;
          element.lastName = action.lastName;
          return element;
        }
        return element;
      });

      localStorage.setItem('users', JSON.stringify(newStateAfterChange));

      return newStateAfterChange;

    case ActionTypes.INITIALIZATION_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UsersReducer;