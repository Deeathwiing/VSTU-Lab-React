import { connect } from 'react-redux';
// eslint-disable-next-line max-len
import { registrationActionCreator } from '../redux/actionCreators/UsersActionCreator';
import Registration from '../components/main/section/registration/Registration';
import { getUser, getUsersLength } from '../takes/Takes';

const mapStateToProps = state => ({
  state: { user: getUser(state), usersLength: getUsersLength(state) },
});
const mapDispatchToProps = dispatch => ({
  reg: (email, firstName, lastName, password) => {
    dispatch(registrationActionCreator(email, firstName, lastName, password));
  },
});

const registrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);

export default registrationContainer;
