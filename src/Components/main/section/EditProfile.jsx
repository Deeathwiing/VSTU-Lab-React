import React from 'react';
import PropTypes from 'prop-types';
import LoginError from './LoginError';
import { getUser } from '../../../selectors/Selectors';

class EditProfile extends React.Component {
  state = { firstName: '', lastName: '' };

  removeReq = () => {
    const state = localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : undefined;
    this.props.removeRequest(getUser(state));
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeNames = (event) => {
    event.preventDefault();
    const state = localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : undefined;
    this.props.changeFirstLastName(
      this.state.firstName,
      this.state.lastName,
      getUser(state)
    );
  };

  render() {
    if (this.props.state.user.admin || this.props.state.user.checkLogin) {
      return (
        <>
          <div className="m-2">
            <button type="button" onClick={this.removeReq}>
              Remove Request
            </button>
          </div>
          <form>
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
            <button type="button" onClick={this.changeNames}>
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
