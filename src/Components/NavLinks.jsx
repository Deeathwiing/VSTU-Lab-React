/* eslint-disable react/no-multi-comp */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CustomNavLink = React.memo(props => (
  <NavLink
    to={props.state.to}
    className={props.state.classNames}
    key={props.state.description}
  >
    {props.state.description}
  </NavLink>
));

export const NavLinksAdministration = React.memo((props) => {
  // eslint-disable-next-line react/prop-types
  const link = props.state.map(element => (
    <li key={element.description} className={`nav-tem ${element.liClass}`}>
      <CustomNavLink key={element.description} state={element} />
    </li>
  ));
  return link;
});

export const NavLinkDropDown = React.memo((props) => {
  // eslint-disable-next-line react/prop-types
  const link = props.state.map(element => (
    <div key={element.description}>
      <CustomNavLink key={element.description} state={element} />
      <div className="dropdown-divider" />
    </div>
  ));
  return link;
});

CustomNavLink.propTypes = {
  state: PropTypes.shape({
    description: PropTypes.string,
    classNames: PropTypes.string,
    to: PropTypes.string,
  }),
};

NavLinksAdministration.propTypes = {
  state: PropTypes.shape({
    description: PropTypes.string,
    classNames: PropTypes.string,
    to: PropTypes.string,
  }),
};

NavLinkDropDown.propTypes = {
  state: PropTypes.shape({
    description: PropTypes.string,
    classNames: PropTypes.string,
    to: PropTypes.string,
  }),
};

CustomNavLink.defaultProps = {
  state: [],
};
NavLinksAdministration.defaultProps = {
  state: [],
};
NavLinkDropDown.defaultProps = {
  state: [],
};
