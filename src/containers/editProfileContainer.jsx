import { connect } from 'react-redux';
import {
  removeRequestActionCreator,
  changeFirstLastNameActionCreator,
} from '../redux/actionCreators/usersActionCreator';
import EditProfile from '../components/main/section/editProfile/editProfile';

const mapStateToProps = state => ({
  state: { user: state.user },
});

const mapDispatchToProps = dispatch => ({
  removeRequest: () => {
    dispatch(removeRequestActionCreator());
  },
  changeFirstLastName: (firstName, lastName, user) => {
    dispatch(changeFirstLastNameActionCreator(firstName, lastName, user));
  },
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

export default EditProfileContainer;
