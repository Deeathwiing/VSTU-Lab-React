import "react";
import "react-dom";
import $ from "jquery";
import "popper.js";
import "jquery";

export function login() {
  let checklogin = false;
  let admin = false;

  let usersBD = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  const logEmail = $("#logEmail")
    .val()
    .toLowerCase();
  const logPass = $("#logPass").val();
  checklogin = usersBD.some(
    user => logEmail === user.email && logPass === user.password
  );

  admin = usersBD.some(
    user =>
      logEmail === user.email &&
      logPass === user.password &&
      user.administration
  );

  if (checklogin) {
    if (admin) {
      localStorage.setItem("user", JSON.stringify({ logEmail, admin }));
    } else {
      localStorage.setItem("user", JSON.stringify({ logEmail, checklogin }));
    }
  }

  if (!checklogin & !admin) {
    alert("Введите правильный email и пароль");
  }
}
