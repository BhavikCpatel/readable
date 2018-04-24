import React from 'react';

const TextField = props => (
  <div id={`${props.id}-field`} className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-color-text--primary mdl-typography--caption">
      {props.fieldCaption}
    </div>
    <div className="mdl-cell mdl-cell--12-col">
      <div
        className={`mdl-textfield mdl-js-textfield ${
          props.largeField ? 'large-textfield' : ''
        } is-upgraded data-upgraded=",MaterialTextField"  `}
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
            e.target.parentElement.setAttribute(
              'class',
              `${e.target.parentElement.className
                .replace('is-dirty', '')
                .replace('is-invalid', '')} is-dirty ${e.target.value === '' &&
                'is-invalid'}`,
            );

            props.onChange(e);
          }}
          onFocus={e =>
            (e.target.parentElement.className = `${
              e.target.parentElement.className
            } is-focused`)
          }
          onBlur={e => {
            e.target.parentElement.className = e.target.parentElement.className.replace(
              'is-focused',
              '',
            );
          }}
          value={props.value}
        />

        <span className="mdl-textfield__error">{props.errorMessage}</span>
      </div>
    </div>
  </div>
);

export default TextField;
