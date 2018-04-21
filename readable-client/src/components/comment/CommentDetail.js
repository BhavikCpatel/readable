import React from 'react';

const CommentDetail = ({ comment }) => (
  <span className="mdl-list__item-primary-content">
    <span>{comment.author}</span>

    <span className="mdl-list__item-text-body">{comment.body}</span>
    <span className="mdl-list__item-text-body">
      On {new Date(comment.timestamp).toLocaleString()}
    </span>
  </span>
);
export default CommentDetail;
