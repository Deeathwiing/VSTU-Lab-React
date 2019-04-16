import { connect } from 'react-redux';
import { removeRequestActionCreator } from '../../../redux/reducers/usersReducer';
import EditProfile from './editProfile';

const mapStateToProps = state => ({
  state: { users: state.users },
});

const mapDispatchToProps = dispatch => ({
  removeRequest: (event) => {
    dispatch(removeRequestActionCreator());
    event.preventDefault();
  },
});

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

export default EditProfileContainer;
