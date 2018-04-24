import React from 'react';

const ColoredButton = props => (
  <button
    id={props.id}
    type={props.type ? props.type : 'button'}
    className={`mdl-button mdl-js-button mdl-js-ripple-effect  
    mdl-button--colored ${props.color && `mdl-color-text--${props.color}`}`}
    onClick={props.onClick}
  >
    {props.icon && <i className="material-icons">{props.icon}</i>}
    {props.value}
  </button>
);

export default ColoredButton;
