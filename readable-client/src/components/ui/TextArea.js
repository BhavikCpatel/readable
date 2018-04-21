import React from 'react';

const TextArea = props => (
  <div id={`${props.id}-field`}>
    <div
      className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${
        props.largeField ? 'large-textfield' : ''
      }`}
    >
      <textarea
        className="mdl-textfield__input"
        type="text"
        rows={props.rows}
        id={props.id}
      />
      <label className="mdl-textfield__label" htmlFor="sample5">
        {props.title}
      </label>
      <span className="mdl-textfield__error">{props.errorMessage}</span>
    </div>
  </div>
);

export default TextArea;
