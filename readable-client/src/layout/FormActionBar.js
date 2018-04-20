import React from 'react';
import ColoredButton from './ColoredButton';
const FormActionBar = props => (
  <React.Fragment>
    <ColoredButton icon="save" id="saveButton" value=" Save" />

    <ColoredButton icon="clear" id="clearButton" value=" Clear" />
  </React.Fragment>
);

export default FormActionBar;
