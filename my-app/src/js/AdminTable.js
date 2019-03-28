import $ from "jquery";
import "popper.js";
import "jquery";

export function adminTable() {
  $(`#loadUsers`).remove();
  let usersBD = localStorage.users ? JSON.parse(localStorage.users) : [];
  for (let i = 0; i < usersBD.length; i++) {
    const userId = usersBD[i];

    if (userId) {
      $("#adminTable").append(`
               <tr id=trForDelete-${i}>
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
          .append(`<button class="btnForDelete btn-danger btn-block " id=btnForDelete-${i}
}  >Delete User</button>`);
      }
    }
  }

  $("#adminTable").on("click", ".btnForDelete", function() {
    const idToDelete = Number(
      $(this)
        .attr("id")
        .substr(13)
    );

    if (usersBD[idToDelete].deleteAccountRequest) {
      // usersBD.splice(idToDelete, 1);
      delete usersBD[idToDelete];
      localStorage.users = JSON.stringify(usersBD);
      $(`#btnForDelete-${idToDelete}`).remove();
      $(`#trForDelete-${idToDelete}`).remove();
    }
  });
}
