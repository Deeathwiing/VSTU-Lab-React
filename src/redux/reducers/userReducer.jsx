/* eslint-disable no-case-declarations */
const LOGIN = 'LOGIN';

const initialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : [null];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      let newState;
      if (action.checkLogin) {
        if (action.admin) {
          newState = { logEmail: action.logEmail, admin: action.admin };
          localStorage.setItem(
            'user',
            JSON.stringify({ logEmail: action.logEmail, admin: action.admin }),
          );
        } else {
          newState = { logEmail: action.logEmail, checkLogin: action.checkLogin };
          localStorage.setItem(
            'user',
            JSON.stringify({ logEmail: action.logEmail, checkLogin: action.checkLogin }),
          );
        }
      }
      return newState || false;

    default:
      return state;
  }
};

export default userReducer;
