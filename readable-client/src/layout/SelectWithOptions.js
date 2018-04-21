import React from 'react';

const SelectWithOptions = props => (
  <div id={`${props.id}-field`}>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <select className="mdl-textfield__input" id={props.id}>
        <option value="" />
        <option value="react">React</option>
        <option value="redux">Redux</option>
        <option value="udacity">Udacity</option>
      </select>
      <label className="mdl-textfield__label" htmlFor={props.id}>
        {props.title}
      </label>
      <span className="mdl-textfield__error">{props.errorMessage}</span>
    </div>
  </div>
);

export default SelectWithOptions;
