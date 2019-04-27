import React from 'react';
import BtnDelete from './btnDelete';

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
      </td>
    </tr>
  ));

export default Table;
