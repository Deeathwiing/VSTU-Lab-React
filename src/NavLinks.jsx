import React from "react";
import { NavLink } from "react-router-dom";

export const CustomNavLink = props => {
  return (
    <NavLink
      to={props.state.to}
      className={props.state.classNames}
      key={props.state.description}
    >
      {props.state.description}
    </NavLink>
  );
};

export const NavLinksAdministration = props => {
  let link = props.state.map(element => {
    return (
      <li className={"nav-tem " + element.liClass} key={element.description}>
        <CustomNavLink state={element} />
      </li>
    );
  });
  return link;
};

export const NavLinkDropDown = props => {
  let link = props.state.map(element => {
    return (
      <span key={element.description}>
        <CustomNavLink state={element} />
        <div className="dropdown-divider" />
      </span>
    );
  });
  return link;
};
