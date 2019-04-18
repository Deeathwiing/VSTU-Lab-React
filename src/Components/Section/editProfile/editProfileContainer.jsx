import { connect } from 'react-redux';
import EditProfile from './editProfile';
import {
  removeRequestActionCreator,
  changeFirstLastNameActionCreator,
} from '../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { users: state.users },
});

const mapDispatchToProps = dispatch => ({
  removeRequest: (event) => {
    dispatch(removeRequestActionCreator());
    event.preventDefault();
  },
  changeFirstLastName: (firstName, lastName) => {
    dispatch(changeFirstLastNameActionCreator(firstName, lastName));
  },
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

export default EditProfileContainer;
