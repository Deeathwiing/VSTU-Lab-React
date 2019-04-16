import { connect } from 'react-redux';

import Registration from './Registration';
import { registrationActionCreator } from '../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { user: state.user, usersLenght: state.users.length },
});

const mapDispatchToProps = dispatch => ({
  reg: (event, email, firstName, lastName, password) => {
    dispatch(registrationActionCreator(email, firstName, lastName, password));
    event.preventDefault();
  },
});

const registrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);

export default registrationContainer;
