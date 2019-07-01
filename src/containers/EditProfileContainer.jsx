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
  removeRequest: (user) => {
    dispatch(removeRequestAPI('http://localhost:3001/removeRequest', user));
  },
  changeFirstLastName: (firstName, lastName, user) => {
    const data = {
      firstName,
      lastName,
      user,
    };

    dispatch(editNamesAPI('http://localhost:3001/editNames', data));
  },
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

export default EditProfileContainer;
