import React, { Component } from 'react';
import BtnDelete from './BtnDelete';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = { users: this.props.users };
  }
  deleteUser = event => {
    const idToDelete = Number(event.target.getAttribute('data-id'));
    this.setState(this.props.dispatch({ type: 'DELETE-USERS', idToDelete: idToDelete }));
  };

  usersTable = () =>
    this.state.users.map(element => {
      return (
        <tr key={element.id} id={'trForDelete-' + element.id}>
          <th scope="row">{element.id}</th>
          <td>{element.firstName}</td>
          <td>{element.lastName}</td>
          <td>{element.email}</td>
          <td>{element.deleteAccountRequest.toString()}</td>
          <td key={element.deleteAccountRequest.toString()}>
            <BtnDelete state={element} deleteUser={this.deleteUser} key={element.id} />
          </td>
        </tr>
      );
    });
  render() {
    return <this.usersTable />;
  }
}
export default Table;
