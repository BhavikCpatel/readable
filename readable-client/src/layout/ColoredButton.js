import React from 'react';

const ColoredButton = props => (
  <button
    id={props.id}
    className="mdl-button mdl-js-button mdl-js-ripple-effect  mdl-button--colored"
  >
    {props.icon && <i class="material-icons">{props.icon}</i>}
    {props.value}
  </button>
);

export default ColoredButton;
