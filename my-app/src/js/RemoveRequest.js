export function removeRequest() {
  const user = localStorage.user ? JSON.parse(localStorage.user) : [];
  const email = user.logEmail;
  let usersBD = localStorage.users ? JSON.parse(localStorage.users) : [];
  usersBD = usersBD.map(user => {
    if (user.email === email) {
      user.deleteAccountRequest = true;
      return user;
    }
    return user;
  });
  localStorage.users = JSON.stringify(usersBD);
}
