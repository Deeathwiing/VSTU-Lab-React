import { connect } from 'react-redux';
import EditProfile from './editProfile';
import { removeRequestActionCreator } from '../../../redux/actionCreators/usersActionCreator';

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
