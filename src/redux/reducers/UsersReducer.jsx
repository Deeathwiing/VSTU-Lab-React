/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { ActionTypes } from '../ActionTypes';

const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.USERS_FETCH_DATA_SUCCESS:
      return action.users;
    case ActionTypes.DELETE_USERS:
      const newStateAfterDelete = state.filter((user) => {
        if (user._id === action.idToDelete && user.deleteAccountRequest) {
          return false;
        }
        return true;
      });

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

      return newStateAfterChange;

    case ActionTypes.INITIALIZATION_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UsersReducer;
