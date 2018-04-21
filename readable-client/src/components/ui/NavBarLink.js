import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ path, title }) => (
  <NavLink
    exact
    className="mdl-navigation__link mdl-typography--text-uppercase"
    activeClassName="mdl-color--orange"
    to={`/${path}`}
  >
    {title}
  </NavLink>
);
export default NavBarLink;
