const LOGIN = 'LOGIN';
const userReducer = (state, action) => {
  // должно придти как user так и users

  switch (action.type) {
    case LOGIN:
      let checkLogin = false;
      let admin = false;
      const logEmail = action.logEmail;
      const usersBD = state.users;

      checkLogin = usersBD.some(
        user => logEmail === user.email && action.logPass === user.password,
      );
      admin = usersBD.some(
        user => logEmail === user.email && action.logPass === user.password && user.administration,
      );
      if (!checkLogin && !admin) {
        alert('Введите правильный email и пароль');
      }
      if (checkLogin) {
        if (admin) {
          state.user = [{ logEmail, admin }];
          localStorage.setItem('user', JSON.stringify({ logEmail, admin }));
        } else {
          state.user = [{ logEmail, checkLogin }];
          localStorage.setItem('user', JSON.stringify({ logEmail, checkLogin }));
        }
      }
      return state.user;
    default:
      return state.user;
  }
};

export const loginActionCreator = (logEmail, logPass) => ({
  type: LOGIN,
  logEmail,
  logPass,
});

export default userReducer;
