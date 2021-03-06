/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { ActionTypes } from '../ActionTypes';

const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.USERS_FETCH_DATA_SUCCESS:
      return [...state, ...action.users];
    case ActionTypes.DELETE_USERS:
      const newStateAfterDelete = state.filter((user) => {
        if (user.id === action.idToDelete && user.deleteAccountRequest) {
          return false;
        }
        return true;
      });

      return newStateAfterDelete;

    case ActionTypes.DELETE_STATE_USERS:
      return [];

    case ActionTypes.INITIALIZATION_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UsersReducer;
