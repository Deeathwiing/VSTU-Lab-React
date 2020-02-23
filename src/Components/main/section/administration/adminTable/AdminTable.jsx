import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

class AdminTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      scrollTo: 0,
      itemsAmount: 3,
      firstName: false,
      lastName: false,
      email: false,
    };
  }

  async componentDidMount() {
    await this.setState(state => ({
      page: state.length / state.itemsAmount || 1,
    }));

    if (this.state.length < 1) {
      await this.props.getUsers(
        this.state.itemsAmount,
        this.state.page,
        this.state.firstName || 'none',
        this.state.lastName || 'none',
        this.state.email || 'none'
      );
      await this.setState(state => ({
        page: state.length / state.itemsAmount,
      }));
    } else {
      await this.props.getUsers(
        this.state.itemsAmount,
        this.state.page,
        this.state.firstName || 'none',
        this.state.lastName || 'none',
        this.state.email || 'none'
      );
      await this.setState(state => ({
        page: state.length / state.itemsAmount,
      }));
    }

    await window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      items: props.state,
      page: props.state.length / state.itemsAmount || 1,
    };
  }

  handleScroll = async () => {
    if (
      window.innerHeight + window.scrollY
      >= document.body.offsetHeight - 100
    ) {
      if (this.state.scrollTo < document.body.offsetHeight) {
        const newPage = Math.floor(this.state.page + 1);
        await this.setState((state, props) => ({
          scrollTo: Number(document.body.offsetHeight),
          page: newPage,
        }));

        await this.props.getUsers(
          this.state.itemsAmount,
          newPage,
          this.state.firstName || 'none',
          this.state.lastName || 'none',
          this.state.email || 'none'
        );
      }
    }
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchUsers = (event) => {
    event.preventDefault();

    this.props.deleteStateUsers();

    this.props.getUsers(
      this.state.itemsAmount,
      1,
      this.state.firstName || 'none',
      this.state.lastName || 'none',
      this.state.email || 'none'
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="header"> Administrator Page </h1>
        <form>
          <label className="m-2">
            Email:
            <input
              className="m-2"
              name="email"
              type="text"
              id="email"
              onChange={this.handleInput}
            />
          </label>
          <label>
            First Name:
            <input
              name="firstName"
              className="m-2"
              type="text"
              id="firstName"
              onChange={this.handleInput}
            />
          </label>
          <label>
            Last Name:
            <input
              name="lastName"
              className="m-2"
              type="text"
              id="lastName"
              onChange={this.handleInput}
            />
          </label>
          <button type="button" onClick={this.searchUsers}>
            Отправить
          </button>
        </form>

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
              state={this.props.state}
              deleteUser={this.props.deleteUser}
              addAdmin={this.props.addAdmin}
              deleteAdmin={this.props.deleteAdmin}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminTable;

AdminTable.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
};

AdminTable.defaultProps = {
  state: [],
  deleteUser: () => {},
};
