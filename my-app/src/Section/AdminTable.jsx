import React from "react";
import $ from "jquery";

const AdminTable = () => {
  function adminTable() {
    $(`#loadUsers`).remove();
    let usersBD = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    for (let i = 0; i < usersBD.length; i++) {
      let user = usersBD[i];
      const userId = user.id;

      $("#adminTable").append(`
               <tr key={i} id=trForDelete-${userId}>
                <th scope="row">${userId}</th>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.deleteAccountRequest}</td>
                <td id="tdForBtn-${i}"></td>
              </tr>
`);

      if (user.deleteAccountRequest) {
        $(`#tdForBtn-${i}`)
          .append(`<button class="btnForDelete btn-danger btn-block " data-id=${userId}
}  >Delete User</button>`);
      }
    }

    $("#adminTable").on("click", ".btnForDelete", function() {
      const idToDelete = Number($(this).attr("data-id"));

      usersBD = usersBD.filter(user => {
        if ((user.id === idToDelete) & user.deleteAccountRequest) {
          $(`#btnForDelete-${idToDelete}`).remove();
          $(`#trForDelete-${idToDelete}`).remove();
          return false;
        } else return user;
      });
      localStorage.setItem("users", JSON.stringify(usersBD));
    });
  }

  return (
    <div className="container-fluid">
      <h1 className="header"> Administrator Page </h1>
      <button id="loadUsers" type="button" onClick={adminTable}>
        Load users list
      </button>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">email</th>
            <th scope="col">Remove request</th>
          </tr>
        </thead>
        <tbody id="adminTable" />
      </table>
    </div>
  );
};

export default AdminTable;
