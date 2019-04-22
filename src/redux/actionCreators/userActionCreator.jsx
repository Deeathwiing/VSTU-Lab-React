const LOGIN = 'LOGIN';

export const loginActionCreator = (admin, checkLogin, logEmail) => ({
  type: LOGIN,
  checkLogin,
  admin,
  logEmail,
});
