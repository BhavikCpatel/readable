import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/loader.css';

const Loader = props => (
  <div className="loader-container">
    {props.message && <div className="loader-message">{props.message}</div>}
    <div className="loader" />
  </div>
);

Loader.defaultProps = {
  message: null,
};

Loader.propTypes = {
  message: PropTypes.string,
};
export default Loader;
