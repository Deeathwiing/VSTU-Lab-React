import { connect } from 'react-redux';
import { loginActionCreator } from '../redux/actionCreators/UserActionCreator';
import LogIn from '../components/main/section/logIn/LogIn';
import { userSelector } from '../selectors/Selectors';

const mapStateToProps = state => ({
  state: { user: userSelector(state) },
});

const mapDispatchToProps = dispatch => ({
  login: (logEmail, logPass) => {
    let checkLogin = false;
    let admin = false;
    const state = localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : undefined;
    checkLogin = state.users.some(
      user => logEmail === user.email && logPass === user.password
    );
    admin = state.users.some(
      user =>
        logEmail === user.email
        && logPass === user.password
        && user.administration
    );
    if (!checkLogin && !admin) {
      alert('Введите правильный email и пароль');
    }
    dispatch(loginActionCreator(admin, checkLogin, logEmail));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

export default LoginContainer;
