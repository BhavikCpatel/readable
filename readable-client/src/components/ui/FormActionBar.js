import React from 'react';
import ColoredButton from './ColoredButton';

const FormActionBar = props => (
  <React.Fragment>
    <ColoredButton
      icon="clear"
      id="clearButton"
      type="reset"
      value=" Clear"
      onClick={props.onClear}
    />
    <ColoredButton icon="save" id="saveButton" type="submit" value=" Save" />

    {props.onCancel && (
      <ColoredButton
        icon="cancel"
        id="cancelButton"
        value=" Cancel"
        onClick={props.onCancel}
      />
    )}
  </React.Fragment>
);

export default FormActionBar;
