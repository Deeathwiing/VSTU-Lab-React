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
  let BDusers = [];
  BDusers = localStorage.users ? JSON.parse(localStorage.users) : [];
  const email = $("#regEmail")
    .val()
    .toLowerCase();
  const firstName = $("#regFirstName")
    .val()
    .toLowerCase();
  const lastName = $("#regLastName")
    .val()
    .toLowerCase();
  const password = $("#regPassword").val();

  for (let i = 0; i < BDusers.length; i++) {
    const user = BDusers[i];

    if (email === user.email) {
      alert("Данный email занят");
      return;
    }
  }

  if (
    // eslint-disable-next-line eqeqeq
    (firstName && lastName && password) == false
  ) {
    alert("Заполните все поля");
    return;
  }

  const newUser = new User(email, firstName, lastName, password);
  BDusers.push(newUser);

  localStorage.users = JSON.stringify(BDusers);
  $("#Reg").hide();
}
