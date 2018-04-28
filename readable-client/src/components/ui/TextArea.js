import React from 'react';
import PropTypes from 'prop-types';

const TextArea = props => (
  <div id={`${props.id}-field`} className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-color-text--primary mdl-typography--caption">
      {props.fieldCaption}
    </div>
    <div className="mdl-cell mdl-cell--12-col">
      <div
        className={`mdl-textfield mdl-js-textfield  
        ${props.largeField ? 'large-textfield' : ''}`}
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
            e.target.parentElement.setAttribute(
              'class',
              `${e.target.parentElement.className
                .replace('is-dirty', '')
                .replace('is-invalid', '')} is-dirty ${e.target.value === '' &&
                'is-invalid'}`,
            );
            props.onChange(e);
          }}
          onFocus={e => {
            e.target.parentElement.className = `${
              e.target.parentElement.className
            } is-focused is-upgraded`;
          }}
        />

        <span className="mdl-textfield__error">{props.errorMessage}</span>
      </div>
    </div>
  </div>
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  fieldCaption: PropTypes.string.isRequired,
  largeField: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  rows: PropTypes.string,
  pattern: PropTypes.string,
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  value: '',
  errorMessage: '',
  largeField: false,
  rows: '2',
  pattern: null,
  disabled: false,
};

export default TextArea;
