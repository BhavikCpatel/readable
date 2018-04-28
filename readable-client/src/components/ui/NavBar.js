import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

const NavBar = ({ items }) => (
  <nav className="app-navigation mdl-navigation">
    {items.map(navItem => (
      <NavBarLink
        key={navItem.name}
        title={navItem.name}
        path={navItem.path ? `posts/${navItem.path}` : ''}
      />
    ))}
  </nav>
);

NavBar.defaultProps = {
  items: [],
};

NavBar.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};
export default NavBar;
