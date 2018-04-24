import React from 'react';

const TextField = props => (
  <div id={`${props.id}-field`}>
    <div
      className={`mdl-textfield mdl-js-textfield ${!props.value &&
        'mdl-textfield--floating-label'} ${
        props.largeField ? 'large-textfield' : ''
      }`}
    >
      <input
        id={props.id}
        name={props.id}
        className="mdl-textfield__input"
        type="text"
        pattern={props.pattern}
        disabled={props.disabled}
        onChange={e => {
          e.target.required = true;
          props.onChange(e);
        }}
        value={props.value}
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

export default TextField;
