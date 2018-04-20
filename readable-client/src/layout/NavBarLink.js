import React from 'react';

const NavBarLink = props => (
  <a
    className="mdl-navigation__link mdl-typography--text-uppercase"
    href={props.path}
  >
    {props.title}
  </a>
);

export default NavBarLink;
