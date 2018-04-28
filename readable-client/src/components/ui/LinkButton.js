import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = props => (
  <Link
    to={`${props.path}`}
    className={`mdl-button mdl-js-button mdl-js-ripple-effect ${props.color &&
      `mdl-button--raised mdl-color--${props.color}`}  mdl-button--colored`}
  >
    {props.icon && <i className="material-icons">{props.icon}</i>}
    {props.value}
  </Link>
);

LinkButton.defaultProps = {
  color: 'primary',
  icon: null,
  path: '/',
};

LinkButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default LinkButton;
