import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="app-navigation-container">{props.children}</div>
      <span className="app-mobile-title mdl-layout-title">
        {props.appTitle}
      </span>
    </div>
  </header>
);

Header.defaultProps = {
  color: 'primary',
};
Header.propTypes = {
  color: PropTypes.string,
  appTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
