import React from "react";
import { adminTable } from "../js/AdminTable";

const AdminTable = () => {
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
