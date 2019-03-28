import React, { Component } from "react";
import { removeRequest } from "../js/RemoveRequest";

class EditProfile extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={removeRequest}>
          Remove Request
        </button>
      </div>
    );
  }
}

export default EditProfile;
