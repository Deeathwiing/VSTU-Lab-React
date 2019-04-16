const LOGIN = 'LOGIN';

export const loginActionCreator = (logEmail, logPass) => ({
  type: LOGIN,
  logEmail,
  logPass,
});
