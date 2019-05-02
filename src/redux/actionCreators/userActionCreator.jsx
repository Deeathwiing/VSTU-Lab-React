import { ActionTypes } from '../ActionTypes';

export const loginActionCreator = (admin, checkLogin, logEmail) => ({
  type: ActionTypes.LOGIN,
  checkLogin,
  admin,
  logEmail,
});
