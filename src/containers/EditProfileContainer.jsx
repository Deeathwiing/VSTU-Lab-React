import { connect } from 'react-redux';
import EditProfile from '../components/main/section/EditProfile';
import { userSelector } from '../selectors/Selectors';
import {
  removeRequestAPI,
  editNamesAPI,
  editPasswordAPI,
} from '../redux/apiActionCreators/usersAC';

const mapStateToProps = state => ({
  state: { user: userSelector(state) },
});

const mapDispatchToProps = dispatch => ({
  removeRequest: () => {
    dispatch(removeRequestAPI('http://localhost:3002/users/removeRequest'));
  },
  changeFirstLastName: (firstName, lastName) => {
    const data = {
      firstName,
      lastName,
    };

    dispatch(editNamesAPI('http://localhost:3002/users/editprofile', data));
  },
  changePassword: (prevPassword, newPassword) => {
    const data = {
      prevPassword,
      newPassword,
    };

    dispatch(
      editPasswordAPI('http://localhost:3002/users/changePassword', data)
    );
  },
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

export default EditProfileContainer;
