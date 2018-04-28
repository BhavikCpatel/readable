import React from 'react';
import PropTypes from 'prop-types';

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

ColoredButton.defaultProps = {
  type: 'button',
  icon: null,
  color: null,
  onClick: null,
};
ColoredButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default ColoredButton;
