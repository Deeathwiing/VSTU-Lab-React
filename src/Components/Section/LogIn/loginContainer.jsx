import { connect } from 'react-redux';
import { loginActionCreator } from '../../../redux/reducers/userReducer';
import LogIn from './logIn';

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
