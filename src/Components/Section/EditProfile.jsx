import React from 'react';
import { removeRequestActionCreator } from '../../redux/reducers/usersReducer';

const EditProfile = (props) => {
  function removeRequest() {
    props.dispatch(removeRequestActionCreator());
  }

  return (
    <div>
      <button type="button" onClick={removeRequest}>
        Remove Request
      </button>
    </div>
  );
};

export default EditProfile;
