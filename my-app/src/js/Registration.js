/* eslint-disable no-plusplus */
import $ from "jquery";
import "popper.js";
import "jquery";
import "popper.js";

export function registration() {
  class User {
    constructor(email, firstName, lastName, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.deleteAccountRequest = false;
      this.administration = false;
    }
  }

  let users = localStorage.users ? JSON.parse(localStorage.users) : [];
  const email = $("#regEmail")
    .val()
    .toLowerCase();
  const firstName = $("#regFirstName").val();
  const lastName = $("#regLastName").val();
  const password = $("#regPassword").val();

  const isTaken = users.some(user => user.email === email);
  if (isTaken) {
    alert("Данный email занят");
    return;
  }

  if (!firstName || !lastName || !password) {
    alert("Заполните все поля");
    return;
  }

  const newUser = new User(email, firstName, lastName, password);
  users.push(newUser);

  localStorage.users = JSON.stringify(users);
  $("#Reg").hide();
}
