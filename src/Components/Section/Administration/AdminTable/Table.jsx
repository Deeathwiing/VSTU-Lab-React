import React, { Component } from 'react';
import BtnDelete from './btnDelete';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = { users: this.props.state };
  }

  componentWillReceiveProps = () => {
    this.setState((state, props) => ({ users: props.state }));
  };

  usersTable = () => this.state.users.map(element => (
    <tr key={element.id} id={`trForDelete-${element.id}`}>
      <th scope="row">{element.id}</th>
      <td>{element.firstName}</td>
      <td>{element.lastName}</td>
      <td>{element.email}</td>
      <td>{element.deleteAccountRequest.toString()}</td>
      <td key={element.deleteAccountRequest.toString()}>
        <BtnDelete state={element} deleteUser={this.props.deleteUser} key={element.id} />
      </td>
    </tr>
  ));

  render() {
    return <this.usersTable />;
  }
}
export default Table;
