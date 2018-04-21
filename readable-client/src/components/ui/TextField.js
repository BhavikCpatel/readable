import React from 'react';

const TextField = props => (
  <div id={`${props.id}-field`}>
    <div
      className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${
        props.largeField ? 'large-textfield' : ''
      }`}
    >
      <input
        className="mdl-textfield__input"
        type="text"
        pattern={props.pattern}
        id={props.id}
      />
      <label className="mdl-textfield__label" htmlFor={props.id}>
        {props.title}
      </label>
      <span className="mdl-textfield__error">{props.errorMessage}</span>
    </div>
  </div>
);

export default TextField;
