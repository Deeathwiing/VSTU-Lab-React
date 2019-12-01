import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const AdminTable = props => (
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
        <Table
          state={props.state}
          deleteUser={props.deleteUser}
          addAdmin={props.addAdmin}
          deleteAdmin={props.deleteAdmin}
        />
      </tbody>
    </table>
  </div>
);
export default AdminTable;

AdminTable.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
};

AdminTable.defaultProps = {
  state: [],
  deleteUser: () => {},
};
