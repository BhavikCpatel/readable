import React from 'react';

const PostCardTitle = props => (
  <div className="mdl-card__title ">
    <h4 className="mdl-card__title-text mdl-color-text--primary">
      {props.title}
    </h4>
  </div>
);

export default PostCardTitle;
