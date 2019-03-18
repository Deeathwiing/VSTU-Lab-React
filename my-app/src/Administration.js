import React, { Component } from "react";
import $ from "jquery";
import "popper.js";
import "jquery";

class Administration extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="header"> Administrator Page </h1>

        <h3>Users list</h3>

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
  }
}

export default Administration;
