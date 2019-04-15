import { connect } from 'react-redux';

import { registrationActionCreator } from '../../../redux/reducers/usersReducer';
import Registration from './Registration';

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
