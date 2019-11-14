import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorAdmin from './ErrorAdmin';
import Administration from './Administration';

class AdminRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.state.user !== nextState.user
      || nextProps.state.users !== nextState.users
      || nextProps.state.items !== nextState.items
    ) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.state.user.admin) {
      return (
        <Route
          path="/administration"
          render={() => (
            <Administration
              init={this.props.init}
              addItems={this.props.addItems}
              deleteItems={this.props.deleteItems}
              deleteUser={this.props.deleteUser}
              state={this.props.state}
            />
          )}
        />
      );
    }
    return <Route path="/administration" component={ErrorAdmin} />;
  }
}

export default AdminRoute;

AdminRoute.propTypes = {
  state: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
  }),
  addItems: PropTypes.func,
  deleteItems: PropTypes.func,
  deleteUser: PropTypes.func,
};

AdminRoute.defaultProps = {
  state: {},
  deleteUser: () => {},
  addItems: () => {},
  deleteItems: () => {},
};
