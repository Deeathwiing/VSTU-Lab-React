import { connect } from 'react-redux';
import EditProfile from './editProfile';
import {
  removeRequestActionCreator,
  changeFirstLastNameActionCreator,
  initializationUsersActionCreator,
} from '../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { user: state.user },
});

const mapDispatchToProps = dispatch => ({
  removeRequest: (event) => {
    dispatch(initializationUsersActionCreator());

    dispatch(removeRequestActionCreator());
    event.preventDefault();
  },
  changeFirstLastName: (firstName, lastName) => {
    dispatch(initializationUsersActionCreator());
    dispatch(changeFirstLastNameActionCreator(firstName, lastName));
  },
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

export default EditProfileContainer;
