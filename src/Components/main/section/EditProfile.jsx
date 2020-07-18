import React from "react";
import PropTypes from "prop-types";
import LoginError from "./LoginError";

class EditProfile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    prevPassword: "",
    newPassword1: "",
    newPassword2: "",
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.state.user !== nextState.user) {
      return true;
    }
    return false;
  }

  removeReq = () => {
    this.props.removeRequest();
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeNames = (event) => {
    event.preventDefault();

    this.props.changeFirstLastName(this.state.firstName, this.state.lastName);
  };

  changePassword = (event) => {
    event.preventDefault();

    if (this.state.newPassword1 === this.state.newPassword2) {
      this.props.changePassword(
        this.state.prevPassword,
        this.state.newPassword1
      );
    } else alert("Новые пароли не совпадают");
  };

  render() {
    if (this.props.state.user.admin || this.props.state.user.checkLogin) {
      return (
        <>
          <div className="m-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.removeReq}
            >
              Remove Request
            </button>
          </div>

          <form className="border border-primary">
            <label className="m-2">
              Имя:
              <input
                className="m-2"
                name="firstName"
                type="text"
                id="ChangeFirstName"
                onChange={this.handleInput}
              />
            </label>
            <label>
              Фамилия:
              <input
                name="lastName"
                className="m-2"
                type="text"
                id="ChangeLastName"
                onChange={this.handleInput}
              />
            </label>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.changeNames}
            >
              Отправить
            </button>
          </form>
          <form className="border border-danger mt-3">
            <label className="m-2">
              Пароль:
              <input
                className="m-2"
                name="prevPassword"
                type="text"
                id="prevPassword"
                onChange={this.handleInput}
              />
            </label>
            <label>
              Новый пароль:
              <input
                name="newPassword1"
                className="m-2"
                type="text"
                id="newPassword1"
                onChange={this.handleInput}
              />
            </label>
            <br />
            <label className="ml-2">
              Повторите новый пароль:
              <input
                name="newPassword2"
                className="m-2"
                type="text"
                id="newPassword2"
                onChange={this.handleInput}
              />
            </label>

            <button
              type="button"
              className="btn btn-primary "
              onClick={this.changePassword}
            >
              Отправить
            </button>
          </form>
        </>
      );
    }
    return <LoginError />;
  }
}

export default EditProfile;

EditProfile.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.object,
  }),
  changeFirstLastName: PropTypes.func,
  removeRequest: PropTypes.func,
};

EditProfile.defaultProps = {
  state: {},
  changeFirstLastName: () => {},
  removeRequest: () => {},
};
