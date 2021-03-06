import React from 'react';
import { NavLink } from 'react-router-dom';

class ItemsAdmin extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="header"> All items </h1>
        <NavLink
          type="button"
          className="btn btn-primary m-2"
          to="/administration/adminitems/additems"
        >
          Add item
        </NavLink>
        <NavLink
          type="button"
          className="btn btn-primary m-2"
          to="/administration/adminitems/allitems"
        >
          All items
        </NavLink>
      </div>
    );
  }
}

export default ItemsAdmin;
