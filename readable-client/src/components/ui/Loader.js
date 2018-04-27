import React from 'react';
import '../../styles/loader.css';

const Loader = props => (
  <div className="loader-container">
    {props.message && <div className="loader-message">{props.message}</div>}
    <div className="loader" />
  </div>
);

export default Loader;
