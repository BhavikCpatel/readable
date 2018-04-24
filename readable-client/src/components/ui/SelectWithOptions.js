import React from 'react';

const SelectWithOptions = props => {
  const categoryOptions = props.options.map(category => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));
  categoryOptions.unshift(<option key="none" value="" />);

  return (
    <div id={`${props.id}-field`}>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <select
          className="mdl-textfield__input"
          id={props.id}
          name={props.id}
          defaultValue={props.value}
          onChange={e => {
            e.target.required = true;

            props.onChange(e);
          }}
        >
          {categoryOptions}
        </select>
        <label className="mdl-textfield__label" htmlFor={props.id}>
          {props.title}
        </label>
        <span className="mdl-textfield__error">{props.errorMessage}</span>
      </div>
    </div>
  );
};

export default SelectWithOptions;
