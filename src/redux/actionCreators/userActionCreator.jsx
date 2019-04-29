import { actionTypes } from '../actionTypes';

export const loginActionCreator = (admin, checkLogin, logEmail) => ({
  type: actionTypes.LOGIN,
  checkLogin,
  admin,
  logEmail,
});
