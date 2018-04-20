import React from 'react';
import CommentCounter from './CommentCounter';
const PostContent = props => (
  <div className="mdl-card__supporting-text">
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--body-2">
      <span className="post-author">By ABC</span>
    </span>

    <span className="post-detail-subitem mdl-typography--caption-color-contrast">
      Jun 28, 2018 12:40 PM
    </span>
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--subhead">
      <div className="post-contents">{props.value}</div>
      <CommentCounter />
    </span>
  </div>
);

export default PostContent;
