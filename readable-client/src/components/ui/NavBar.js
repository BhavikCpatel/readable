import React from 'react';
import NavBarLink from './NavBarLink';

const NavBar = ({ items }) => (
  <nav className="app-navigation mdl-navigation">
    {items.map(navItem => (
      <NavBarLink key={navItem.name} title={navItem.name} path={navItem.path} />
    ))}
  </nav>
);

export default NavBar;
