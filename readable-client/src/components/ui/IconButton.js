import React from 'react';

const IconButton = props => (
  <button
    id={props.id}
    className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
    onClick={props.onClick}
  >
    <i
      className={`material-icons mdl-color-text--${props.iconColor} icon-style`}
    >
      {props.icon}
    </i>
  </button>
);

export default IconButton;
