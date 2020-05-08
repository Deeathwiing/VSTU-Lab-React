import { ActionTypes } from '../ActionTypes';

export const MessagesFetchDataSuccess = data => ({
  type: ActionTypes.MESSAGES_FETCH_DATA_SUCCESS,
  messages: [data],
});
