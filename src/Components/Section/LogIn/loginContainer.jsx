import { connect } from 'react-redux';
import LogIn from './logIn';
import { loginActionCreator } from '../../../redux/actionCreators/userActionCreator';

const mapStateToProps = state => ({
  state: { user: state.user },
});

const mapDispatchToProps = dispatch => ({
  login: (logEmail, logPass) => {
    let checkLogin = false;
    let admin = false;
    const usersBD = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    checkLogin = usersBD.some(user => logEmail === user.email && logPass === user.password);
    admin = usersBD.some(
      user => logEmail === user.email && logPass === user.password && user.administration,
    );
    if (!checkLogin && !admin) {
      alert('Введите правильный email и пароль');
    }
    dispatch(loginActionCreator(admin, checkLogin, logEmail));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);

export default LoginContainer;
