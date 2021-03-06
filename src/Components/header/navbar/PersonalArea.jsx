import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLinkDropDown } from "../../NavLinks";

const PersonalArea = (props) => (
  <>
    <li className="nav-item dropdown PersonalArea">
      <NavLink
        to="#"
        className="nav-link dropdown-toggle"
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
  navLinks: PropTypes.arrayOf(PropTypes.object),

  state: PropTypes.shape({
    checkLogin: PropTypes.bool,
    admin: PropTypes.bool,
    logEmail: PropTypes.string,
  }),
};

PersonalArea.defaultProps = {
  navLinks: [],
  state: {},
};
