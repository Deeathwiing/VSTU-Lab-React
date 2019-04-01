import React from "react";
import $ from "jquery";
export const AdminTable = props => {
  let users = props.state.users;

  function deleteUser(btn) {
    const idToDelete = Number(btn.target.getAttribute("data-id"));

    users = users.filter(user => {
      if ((user.id === idToDelete) & user.deleteAccountRequest) {
        $(`#trForDelete-${idToDelete}`).remove();
        return false;
      } else return user;
    });
    localStorage.setItem("users", JSON.stringify(users));
  }

  const BtnDelete = element => {
    if (element.state.deleteAccountRequest) {
      return (
        <button
          className="btnForDelete btn-danger btn-block "
          data-id={element.state.id}
          key={element.state.id}
          onClick={deleteUser}
        >
          Delete
        </button>
      );
    }
    return BtnDelete;
  };
  const Table = () => {
    let usersTable = users.map(element => {
      return (
        <tr key={element.id} id={"trForDelete-" + element.id}>
          <th scope="row">{element.id}</th>
          <td>{element.firstName}</td>
          <td>{element.lastName}</td>
          <td>{element.email}</td>
          <td>{element.deleteAccountRequest.toString()}</td>
          <td key={element.deleteAccountRequest.toString()}>
            <BtnDelete
              state={element}
              key={element.deleteAccountRequest.toString()}
            />
          </td>
        </tr>
      );
    });
    return usersTable;
  };
  return (
    <div className="container-fluid">
      <h1 className="header"> Administrator Page </h1>
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
        <tbody id="adminTable">
          <Table />
        </tbody>
      </table>
    </div>
  );
};
