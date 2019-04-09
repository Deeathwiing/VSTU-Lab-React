import React from 'react';

const EditProfile = (props) => {
  function removeRequest() {
    const actionCreator = () => ({ type: 'REMOVE-REQUEST' });
    props.dispatch(actionCreator());
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
