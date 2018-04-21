import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = props => (
  <Link
    to={`/post/${props.postId}`}
    className="mdl-button mdl-js-button mdl-js-ripple-effect  mdl-button--colored"
  >
    {props.icon && <i className="material-icons">{props.icon}</i>}
    {props.value}
  </Link>
);

export default LinkButton;