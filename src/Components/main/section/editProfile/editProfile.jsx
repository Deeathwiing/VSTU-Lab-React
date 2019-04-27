import React from 'react';
import PropTypes from 'prop-types';
import LoginError from '../loginError';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  ChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  ChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  changeNames = (event) => {
    event.preventDefault();

    this.props.changeFirstLastName(this.state.firstName, this.state.lastName);
  };

  render() {
    if (this.props.state.user.admin || this.props.state.user.checkLogin) {
      return (
        <>
          <div className="m-2">
            <button type="button" onClick={this.props.removeRequest}>
              Remove Request
            </button>
          </div>
          <form>
            <label className="m-2">
              Имя:
              <input
                className="m-2"
                type="text"
                id="ChangeFirstName"
                onChange={this.ChangeFirstName}
              />
            </label>
            <label>
              Фамилия:
              <input
                className="m-2"
                type="text"
                id="ChangeLastName"
                onChange={this.ChangeLastName}
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
  state: PropTypes.object,
  changeFirstLastName: PropTypes.func,
  removeRequest: PropTypes.func,
};
