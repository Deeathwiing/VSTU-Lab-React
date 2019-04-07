import React from "react";
export const BtnDelete = props => {
  if (props.state.deleteAccountRequest) {
    return (
      <button
        className="btnForDelete btn-danger btn-block "
        data-id={props.state.id}
        key={props.state.id}
        onClick={props.deleteUser}
      >
        Delete
      </button>
    );
  }
  return null;
};
