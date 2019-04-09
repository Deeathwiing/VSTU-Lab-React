import React from 'react';

const EditProfile = (props) => {
  function removeRequest() {
    props.dispatch({ type: 'REMOVE-REQUEST' });
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
