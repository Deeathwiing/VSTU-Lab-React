import React from 'react';
import PropTypes from 'prop-types';
import LoginError from './LoginError';

class EditProfile extends React.Component {
  state = { firstName: '', lastName: '' };

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

    this.props.changeFirstLastName(
      this.state.firstName,
      this.state.lastName,
  
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
