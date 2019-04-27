import { connect } from 'react-redux';
import EditProfile from './editProfile';
import {
  removeRequestActionCreator,
  changeFirstLastNameActionCreator,
} from '../../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { user: state.user },
});

const mapDispatchToProps = dispatch => ({
  removeRequest: () => {
    dispatch(removeRequestActionCreator());
  },
  changeFirstLastName: (firstName, lastName) => {
    dispatch(changeFirstLastNameActionCreator(firstName, lastName));
  },
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

export default EditProfileContainer;
