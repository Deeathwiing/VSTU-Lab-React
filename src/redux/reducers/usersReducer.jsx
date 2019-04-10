/* eslint-disable no-case-declarations */
const REGISTRATION = 'REGISTRATION';
const DELETE_USERS = 'DELETE-USERS';
const REMOVE_REQUEST = 'REMOVE-REQUEST';
const usersReducer = (state, action) => {
  // должны придти users & user

  switch (action.type) {
    case REGISTRATION:
      class User {
        constructor(id, email, firstName, lastName, password) {
          this.id = id;
          this.firstName = firstName;
          this.lastName = lastName;
          this.email = email;
          this.password = password;
          this.deleteAccountRequest = false;
          this.administration = false;
        }
      }

      const users = state.users;

      const lastElement = users[users.length - 1];
      const id = lastElement ? lastElement.id + 1 : 0;

      const isTaken = users.some(user => user.email === action.email);
      if (isTaken) {
        alert('Данный email занят');
        return;
      }

      if (!action.firstName || !action.lastName || !action.password) {
        alert('Заполните все поля');
        return;
      }

      const newUser = new User(
        id,
        action.email,
        action.firstName,
        action.lastName,
        action.password,
      );

      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      return state.users;

    case DELETE_USERS:
      state.users.filter((user) => {
        if (user.id === action.idToDelete && user.deleteAccountRequest) {
          return false;
        }
        return true;
      });

      localStorage.setItem('users', JSON.stringify(state.users));
      return state.users;

    case REMOVE_REQUEST:
      const user = state.user;
      const email = user.logEmail;
      let usersBD = state.users;
      usersBD = usersBD.map((element) => {
        if (element.email === email) {
          element.deleteAccountRequest = true;
          return element;
        }
        return element;
      });
      state.users = usersBD;
      localStorage.setItem('users', JSON.stringify(usersBD));

      return state.users;
    default:
      return state.users;
  }
};

export const deleteUsersActionCreator = idToDelete => ({
  type: DELETE_USERS,
  idToDelete,
});

export const registrationActionCreator = (email, firstName, lastName, password) => ({
  type: REGISTRATION,
  email,
  firstName,
  lastName,
  password,
});

export const removeRequestActionCreator = () => ({
  type: REMOVE_REQUEST,
});

export default usersReducer;
