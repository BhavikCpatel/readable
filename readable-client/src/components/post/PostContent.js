import React from 'react';
import CommentCounter from '../comment/CommentCounter';

const PostContent = ({ post }) => (
  <div className="mdl-card__supporting-text">
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--subhead">
      <div className="post-contents">
        {post.body} sfsdf sdfsdfsd sdfsdf sdf sdf sdf sdfsdf sdf sdfs sdf sdfsdf
      </div>
    </span>
    <span className="post-detail-subitem mdl-typography--font-light mdl-typography--subhead test">
      <CommentCounter />
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
