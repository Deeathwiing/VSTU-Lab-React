/* eslint-disable no-case-declarations */
const LOGIN = 'LOGIN';
const INIT_USER = 'INIT_USER';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      let newState;
      if (action.checkLogin) {
        if (action.admin) {
          newState = { logEmail: action.logEmail, admin: action.admin };
          localStorage.setItem(
            'user',
            JSON.stringify({ logEmail: action.logEmail, admin: action.admin })
          );
        } else {
          newState = {
            logEmail: action.logEmail,
            checkLogin: action.checkLogin,
          };
          localStorage.setItem(
            'user',
            JSON.stringify({
              logEmail: action.logEmail,
              checkLogin: action.checkLogin,
            })
          );
        }
      }
      return newState || false;

    case INIT_USER:
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
