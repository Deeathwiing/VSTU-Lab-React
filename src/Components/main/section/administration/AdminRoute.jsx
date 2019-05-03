import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorAdmin from './ErrorAdmin';
import Administration from './Administration';

const AdminRoute = (props) => {
  if (props.state.user.admin) {
    return (
      <Route
        path="/administration"
        render={() => (
          <Administration
            addItems={props.addItems}
            deleteItems={props.deleteItems}
            deleteUser={props.deleteUser}
            state={props.state}
          />
        )}
      />
    );
  }
  return <Route path="/administration" component={ErrorAdmin} />;
};

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
