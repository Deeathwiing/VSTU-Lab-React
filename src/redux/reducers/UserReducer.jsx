/* eslint-disable no-case-declarations */
import { ActionTypes } from '../ActionTypes';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      let newState;
      if (action.checkLogin) {
        if (action.admin) {
          newState = { logEmail: action.logEmail, admin: action.admin };
        } else {
          newState = {
            logEmail: action.logEmail,
            checkLogin: action.checkLogin,
          };
        }
      }
      return newState || false;

    default:
      return state;
  }
};

export default UserReducer;
