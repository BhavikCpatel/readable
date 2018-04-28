import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ path, title, color }) => (
  <NavLink
    exact
    className="mdl-navigation__link mdl-typography--text-uppercase"
    activeClassName={`mdl-color--${color}`}
    to={`/${path}`}
  >
    {title}
  </NavLink>
);

NavBarLink.defaultProps = {
  color: 'orange-400',
};

NavBarLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default NavBarLink;
