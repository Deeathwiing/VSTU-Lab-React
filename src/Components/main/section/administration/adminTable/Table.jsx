/* eslint-disable no-underscore-dangle */
import React from 'react';
import BtnDelete from './BtnDelete';
import BtnAddAdmin from './BtnAddAdmin';
import BtnDeleteAdmin from './BtnDeleteAdmin';

const Table = props =>
  props.state.map(element => (
    <tr key={element.id} id={`trForDelete-${element.id}`}>
      <th scope="row">{element.id}</th>
      <td>{element.firstName}</td>
      <td>{element.lastName}</td>
      <td>{element.email}</td>
      <td>{element.deleteAccountRequest}</td>
      <td>
        <BtnDelete
          key={element.id}
          state={element}
          deleteUser={props.deleteUser}
        />
        <BtnAddAdmin
          key={element.id}
          state={element}
          addAdmin={props.addAdmin}
        />
        <BtnDeleteAdmin
          key={element.id}
          state={element}
          deleteAdmin={props.deleteAdmin}
        />
      </td>
    </tr>
  ));

export default Table;
