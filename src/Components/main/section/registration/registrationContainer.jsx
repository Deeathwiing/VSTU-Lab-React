import { connect } from 'react-redux';

import Registration from './registration';
import { registrationActionCreator } from '../../../../redux/actionCreators/usersActionCreator';

const mapStateToProps = state => ({
  state: { user: state.user, usersLength: state.users.length },
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
