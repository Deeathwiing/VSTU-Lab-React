import React from 'react';
import { NavLink } from 'react-router-dom';

export const CustomNavLink = props => (
  <NavLink to={props.state.to} className={props.state.classNames} key={props.state.description}>
    {props.state.description}
  </NavLink>
);

export const NavLinksAdministration = (props) => {
  const link = props.state.map(element => (
    <li className={`nav-tem ${element.liClass}`} key={element.description}>
      <CustomNavLink state={element} />
    </li>
  ));
  return link;
};

export const NavLinkDropDown = (props) => {
  const link = props.state.map(element => (
    <span key={element.description}>
      <CustomNavLink state={element} />
      <div className="dropdown-divider" />
    </span>
  ));
  return link;
};
