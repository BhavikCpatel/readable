import React from 'react';
import CommentCounter from '../comment/CommentCounter';

const PostContent = ({ post }) => (
  <div className="mdl-card__supporting-text">
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--body-2">
      <span className="post-author">{post.author}</span>
    </span>

    <span className="post-detail-subitem mdl-typography--caption-color-contrast">
      {post.timestamp}
    </span>
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--subhead">
      <div className="post-contents">{post.body}</div>
      <CommentCounter />
    </span>
  </div>
);

export default PostContent;
