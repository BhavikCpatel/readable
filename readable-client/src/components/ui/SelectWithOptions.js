import React from 'react';

const SelectWithOptions = props => {
  const categoryOptions = props.options.map(category => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));
  categoryOptions.unshift(<option key="none" value="" />);

  return (
    <div id={`${props.id}-field`} className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col mdl-color-text--primary mdl-typography--caption">
        {props.fieldCaption}
      </div>
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-textfield mdl-js-textfield">
          <select
            className="mdl-textfield__input"
            id={props.id}
            name={props.id}
            defaultValue={props.value}
            onChange={e => {
              e.target.required = true;
              e.target.parentElement.setAttribute(
                'class',
                `${e.target.parentElement.className
                  .replace('is-dirty', '')
                  .replace('is-invalid', '')} is-dirty ${e.target.value ===
                  '' && 'is-invalid'}`,
              );
              props.onChange(e);
            }}
            onFocus={e =>
              (e.target.parentElement.className = `${
                e.target.parentElement.className
              } is-focused is-upgraded`)
            }
            onBlur={e =>
              (e.target.parentElement.className = e.target.parentElement.className.replace(
                'is-focused is-upgraded',
                '',
              ))
            }
          >
            {categoryOptions}
          </select>

          <span className="mdl-textfield__error">{props.errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default SelectWithOptions;
