/* eslint-disable no-case-declarations */
const REGISTRATION = 'REGISTRATION';
const DELETE_USERS = 'DELETE-USERS';
const REMOVE_REQUEST = 'REMOVE-REQUEST';

const initialState = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
const usersReducer = (state = initialState, action) => {
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

      const lastElement = state[state.length - 1];
      const id = lastElement ? lastElement.id + 1 : 0;

      const isTaken = state.some(user => user.email === action.email);
      if (isTaken) {
        alert('Данный email занят');
        return state;
      }

      if (!action.firstName || !action.lastName || !action.password) {
        alert('Заполните все поля');
        return state;
      }

      const newUser = new User(
        id,
        action.email,
        action.firstName,
        action.lastName,
        action.password,
      );

      const newStateAfterRegistration = [...state, newUser];
      localStorage.setItem('users', JSON.stringify(newStateAfterRegistration));
      return newStateAfterRegistration;

    case DELETE_USERS:
      const newStateAfterDelete = state.filter((user) => {
        if (user.id === action.idToDelete && user.deleteAccountRequest) {
          return false;
        }
        return true;
      });

      localStorage.setItem('users', JSON.stringify(newStateAfterDelete));
      return newStateAfterDelete;

    case REMOVE_REQUEST:
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
      const email = user.logEmail;
      const usersBD = state.users;
      const newStateAfterRemoveRequest = usersBD.map((element) => {
        if (element.email === email) {
          element.deleteAccountRequest = true;
          return element;
        }
        return element;
      });

      localStorage.setItem('users', JSON.stringify(newStateAfterRemoveRequest));

      return newStateAfterRemoveRequest;
    default:
      return state;
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
