import React from 'react';

const TextArea = props => (
  <div id={`${props.id}-field`}>
    <div
      className={`mdl-textfield mdl-js-textfield  
        mdl-textfield--floating-label ${
          props.largeField ? 'large-textfield' : ''
        }`}
    >
      <textarea
        className="mdl-textfield__input"
        type="text"
        id={props.id}
        name={props.id}
        rows={props.rows}
        pattern={props.pattern}
        value={props.value}
        disabled={props.disabled}
        onChange={e => {
          e.target.required = true;
          props.onChange(e);
        }}
      />
      {!props.value && (
        <label className="mdl-textfield__label" htmlFor={props.id}>
          {props.title}
        </label>
      )}
      <span className="mdl-textfield__error">{props.errorMessage}</span>
    </div>
  </div>
);

export default TextArea;
