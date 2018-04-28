import React from 'react';
import PropTypes from 'prop-types';

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

IconButton.defaultProps = {
  iconColor: 'primary',
};
IconButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
};

export default IconButton;
