import React from 'react';
import { adminTable } from './js/AdminTable';

const Administration = () => (
  <div className="container-fluid">
    <h1 className="header"> Administrator Page </h1>
    <button type="button" onClick={adminTable}>
      Users List
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

export default Administration;
