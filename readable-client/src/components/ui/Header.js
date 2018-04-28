import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const Header = props => (
  <header
    className={`app-header mdl-layout__header mdl-layout__header--waterfall mdl-color--${
      props.color
    }`}
  >
    <div className="mdl-layout__header-row">
      <span className="app-title mdl-layout-title mdl-typography--title-color-contrast">
        {props.appTitle}
      </span>
      <div className="app-header-spacer mdl-layout-spacer" />
      <div className="app-navigation-container">
        <NavBar items={props.items.data} />
      </div>
      <span className="app-mobile-title mdl-layout-title">
        {props.appTitle}
      </span>
    </div>
  </header>
);

Header.defaultProps = {
  color: 'primary',
  items: { data: [] },
};
Header.propTypes = {
  color: PropTypes.string,
  appTitle: PropTypes.string.isRequired,
  items: PropTypes.shape({ data: PropTypes.array }),
};

export default Header;
