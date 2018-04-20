import React from 'react';

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

export default SectionHeader;
