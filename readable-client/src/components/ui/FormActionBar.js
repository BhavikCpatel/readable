import React from 'react';
import PropTypes from 'prop-types';
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

FormActionBar.defaultProps = {
  onCancel: null,
};
FormActionBar.propTypes = {
  onClear: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

export default FormActionBar;
