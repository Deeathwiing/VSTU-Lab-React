import { connect } from 'react-redux';
import LogIn from './logIn';
import { loginActionCreator } from '../../../redux/actionCreators/userActionCreator';

const mapStateToProps = state => ({
  state: { user: state.user },
});

const mapDispatchToProps = dispatch => ({
  login: (event, logEmail, logPass) => {
    dispatch(loginActionCreator(logEmail, logPass));
    event.preventDefault();
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);

export default LoginContainer;
