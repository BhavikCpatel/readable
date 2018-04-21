import React from 'react';
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
        <NavBar items={props.items} />
      </div>
      <span className="app-mobile-title mdl-layout-title">
        {props.appTitle}
      </span>
    </div>
  </header>
);

export default Header;
