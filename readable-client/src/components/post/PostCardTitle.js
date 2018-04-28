import React from 'react';
import PropTypes from 'prop-types';

const PostCardTitle = props => (
  <div className="mdl-card__title ">
    <h4 className="mdl-card__title-text mdl-color-text--primary">
      {props.title}
    </h4>
  </div>
);

PostCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PostCardTitle;
