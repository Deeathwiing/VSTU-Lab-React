import React from "react";
import Items from "./Items";
import { NavLink } from "react-router-dom";

const ItemsAdmin = () => {
  return (
    <div className="container-fluid">
      <h1 className="header"> All items </h1>
      <NavLink
        type="button"
        className="btn btn-primary m-2"
        to="/administration/itemsadmin/additems"
      >
        Add item
      </NavLink>
      <NavLink
        type="button"
        className="btn btn-primary m-2"
        to="/administration/itemsadmin/allitems"
      >
        All items
      </NavLink>
      <Items />
    </div>
  );
};

export default ItemsAdmin;
