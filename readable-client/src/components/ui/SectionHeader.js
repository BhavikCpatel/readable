import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = props => (
  <div
    className={`mdl-card__media mdl-color--${
      props.color
    } mdl-typography--text-uppercase section-header`}
  >
    <span className="title-text mdl-typography--subhead-color-contrast">
      {props.title}
    </span>
  </div>
);

SectionHeader.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SectionHeader.defaultProps = {
  color: 'grey-400',
};
export default SectionHeader;
