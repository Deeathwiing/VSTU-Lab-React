import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLinkDropDown } from '../../navLinks';

const PersonalArea = props => (
  <>
    <li className="nav-item dropdown PersonalArea">
      <NavLink
        to="#"
        className="nav-link font-weight-bold dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-expanded="false"
        key="personalArea"
      >
        Личный кабинет
      </NavLink>

      <div className="dropdown-menu bg-light">
        <NavLinkDropDown key="otherNavlinks" state={props.navLinks} />
        <NavLink
          key="redPersonalArea"
          className="dropdown-item"
          to="/editprofile"
        >
          Редактирование профиля
        </NavLink>

        {props.state.admin && (
          <>
            <div className="dropdown-divider" />
            <NavLink className="dropdown-item text-danger" to="/administration">
              Администрирование
            </NavLink>
          </>
        )}
      </div>
    </li>
  </>
);

export default PersonalArea;

PersonalArea.propTypes = {
  navLinks: PropTypes.array,
  state: PropTypes.object,
};
