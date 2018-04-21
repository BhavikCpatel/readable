import React from 'react';
import NavBar from './NavBar';

const Drawer = props => (
  <div className="app-drawer mdl-layout__drawer">
    <span className="mdl-layout-title mdl-color--text-primary mdl-color--grey-300">
      {props.appTitle}
    </span>
    <div className="app-drawer-separator" />
    <NavBar items={props.items} />
  </div>
);

export default Drawer;
