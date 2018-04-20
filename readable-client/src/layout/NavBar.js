import React from 'react';
import NavBarLink from './NavBarLink';

const NavBar = () => (
  <nav className="app-navigation mdl-navigation">
    <NavBarLink title="redux" path="/redux" />
    <NavBarLink title="react" path="/react" />
    <NavBarLink title="angular" path="/angular" />
    <NavBarLink title="vuejs" path="/vuejs" />
    <NavBarLink title="all" path="/all" />
  </nav>
);

export default NavBar;
