import { connect } from 'react-redux';
// eslint-disable-next-line max-len
import { registrationActionCreator } from '../redux/actionCreators/UsersActionCreator';
import Registration from '../components/main/section/registration/Registration';
import { userSelector, usersLengthSelector } from '../selectors/Selectors';

const mapStateToProps = state => ({
  state: { user: userSelector(state), usersLength: usersLengthSelector(state) },
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
