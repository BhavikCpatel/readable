import React from 'react';
import Comment from './Comment';

const CommentsList = props => (
  <ul className="comments-list mdl-list">
    <Comment />
    <Comment />
    <Comment />
  </ul>
);

export default CommentsList;
