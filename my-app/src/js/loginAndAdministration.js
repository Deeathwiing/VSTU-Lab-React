import "react";
import "react-dom";
import $ from "jquery";
import "popper.js";
import "jquery";

/* eslint-disable no-plusplus */
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

  for (let i = 0; i < usersBD.length; i++) {
    const userId = usersBD[i];

    $("#adminTable").append(`
               <tr>
                <th scope="row">${i}</th>
                <td>${userId.firstName}</td>
                <td>${userId.lastName}</td>
                <td>${userId.email}</td>
                <td>${userId.deleteAccountRequest}</td>
                <td id="tdForBtn-${i}"></td>
              </tr>
`);
    if (userId.deleteAccountRequest) {
      $(`#tdForBtn-${i}`)
        .append(`<button class="btnForDelete btn-danger btn-block " Data-id=btnForDelete-${i}
}  >Delete User</button>`);
    }
  }

  // eslint-disable-next-line func-names
  $("#adminTable").on("click", ".btnForDelete", function() {
    const idToDelete = Number(
      $(this)
        .attr("Data-id")
        .substr(13)
    );

    if (usersBD[idToDelete].deleteAccountRequest) {
      usersBD.splice(idToDelete, 1);
      localStorage.users = JSON.stringify(usersBD);
    }
  });
}
