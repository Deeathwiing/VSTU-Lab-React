/* eslint-disable no-case-declarations */
import { ActionTypes } from '../ActionTypes';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.AUTHORIZATION_SUCCESS:
      return action.user;

    default:
      return state;
  }
};

export default UserReducer;
