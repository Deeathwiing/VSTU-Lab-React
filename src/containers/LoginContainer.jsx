import { connect } from 'react-redux';
import LogIn from '../components/main/section/logIn/LogIn';
import { userSelector } from '../selectors/Selectors';
import { authorization } from '../redux/apiActionCreators/authorizationAC';

const mapStateToProps = state => ({
  state: { user: userSelector(state) },
});

const mapDispatchToProps = dispatch => ({
  login: (logEmail, logPass) => {
    const data = {
      logEmail,
      logPass,
    };
    dispatch(authorization('http://localhost:3001/users/authUser', data));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

export default LoginContainer;
