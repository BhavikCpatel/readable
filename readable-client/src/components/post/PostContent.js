import React from 'react';
import CommentCounter from './CommentCounter';

const PostContent = ({ post }) => (
  <div className="mdl-card__supporting-text">
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--subhead">
      <div className="post-contents">{post.body}</div>
    </span>
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--subhead test">
      <CommentCounter comments={post.commentCount} />
    </span>
    <span className="post-detail-subitem mdl-typography--caption-color-contrast">
      Posted On: {new Date(post.timestamp).toLocaleString()}
    </span>
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--body-2">
      <span className="post-author">By : {post.author}</span>
    </span>
  </div>
);

export default PostContent;
