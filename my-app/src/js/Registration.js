import $ from "jquery";
import "popper.js";
import "jquery";
import "popper.js";

export function registration() {
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

  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  const email = $("#regEmail")
    .val()
    .toLowerCase();
  const firstName = $("#regFirstName").val();
  const lastName = $("#regLastName").val();
  const password = $("#regPassword").val();
  let lastElement = users[users.length - 1];
  const id = lastElement ? lastElement.id + 1 : 0;

  const isTaken = users.some(user => user.email === email);
  if (isTaken) {
    alert("Данный email занят");
    return;
  }

  if (!firstName || !lastName || !password) {
    alert("Заполните все поля");
    return;
  }

  const newUser = new User(id, email, firstName, lastName, password);
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  alert("Вы зарегистрировались,пожалуйста войдите");
  $(".Reg").hide();
}
