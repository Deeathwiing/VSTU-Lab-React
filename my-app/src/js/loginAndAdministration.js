import "react";
import "react-dom";
import $ from "jquery";
import "popper.js";
import "jquery";

// passportn express
export function login() {
  let checklogin = false;
  let admin = false;

  let usersBD = localStorage.users ? JSON.parse(localStorage.users) : [];
  const logEmail = $("#logEmail")
    .val()
    .toLowerCase();
  const logPass = $("#logPass").val();
  const isTaken = usersBD.some(
    user => logEmail === user.email && logPass === user.password
  );
  if (isTaken) {
    $(".removeAfterReg").hide();
    $(".PersonalArea").removeClass("d-none");
    checklogin = true;
  }

  admin = usersBD.some(
    user =>
      logEmail === user.email &&
      logPass === user.password &&
      user.administration
  );

  if (!checklogin) {
    alert("Введите правильный email и пароль");
  }

  if (admin) {
    $(".linkAdmin").removeClass("d-none");
  }
}
