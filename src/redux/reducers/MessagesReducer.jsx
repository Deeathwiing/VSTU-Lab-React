/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { ActionTypes } from '../ActionTypes';

const MessagesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.MESSAGES_FETCH_DATA_SUCCESS:
      return [...state, ...action.messages];
    default:
      return state;
  }
};

export default MessagesReducer;
