import { connect } from 'react-redux';
// eslint-disable-next-line max-len
import Registration from '../components/main/section/registration/Registration';
import {
  userSelector,
  usersLengthSelector,
  usersHasErrored,
} from '../selectors/Selectors';
import { regActionCreatorAPI } from '../redux/apiActionCreators/usersAC';

const mapStateToProps = state => ({
  state: { user: userSelector(state), usersLength: usersLengthSelector(state) },
  usersHasErrored: usersHasErrored(state),
});
const mapDispatchToProps = dispatch => ({
  reg: (email, firstName, lastName, password) => {
    const data = {
      email,
      firstName,
      lastName,
      password,
      administration: false,
      deleteAccountRequest: false,
    };
    dispatch(regActionCreatorAPI('http://localhost:3001/users/create', data));
  },
});

const registrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);

export default registrationContainer;
