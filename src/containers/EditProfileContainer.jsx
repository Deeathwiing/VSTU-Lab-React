import { connect } from 'react-redux';
import EditProfile from '../components/main/section/EditProfile';
import { userSelector } from '../selectors/Selectors';
import {
  removeRequestAPI,
  editNamesAPI,
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
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

export default EditProfileContainer;
