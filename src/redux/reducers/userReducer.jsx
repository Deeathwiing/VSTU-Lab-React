const LOGIN = 'LOGIN';

const initialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : [null];
// users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],

const userReducer = (state = initialState, action) => {
  // должно придти как user так и users

  switch (action.type) {
    case LOGIN:
      let checkLogin = false;
      let admin = false;
      const logEmail = action.logEmail;
      const usersBD = localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : [];

      checkLogin = usersBD.some(
        user => logEmail === user.email && action.logPass === user.password,
      );
      admin = usersBD.some(
        user => logEmail === user.email && action.logPass === user.password && user.administration,
      );
      if (!checkLogin && !admin) {
        alert('Введите правильный email и пароль');
      }
      let newState = null;
      if (checkLogin) {
        if (admin) {
          newState = [{ logEmail, admin }];
          localStorage.setItem('user', JSON.stringify({ logEmail, admin }));
        } else {
          newState = [{ logEmail, checkLogin }];
          localStorage.setItem('user', JSON.stringify({ logEmail, checkLogin }));
        }
      }
      return newState;
    default:
      return state;
  }
};

export const loginActionCreator = (logEmail, logPass) => ({
  type: LOGIN,
  logEmail,
  logPass,
});

export default userReducer;
