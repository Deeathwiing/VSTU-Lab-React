import { connect } from 'react-redux';
import {
  removeRequestActionCreator,
  changeFirstLastNameActionCreator,
} from '../redux/actionCreators/UsersActionCreator';
import EditProfile from '../components/main/section/EditProfile';
import { userSelector } from '../selectors/Selectors';

const mapStateToProps = state => ({
  state: { user: userSelector(state) },
});

const mapDispatchToProps = dispatch => ({
  removeRequest: (user) => {
    dispatch(removeRequestActionCreator(user));
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
