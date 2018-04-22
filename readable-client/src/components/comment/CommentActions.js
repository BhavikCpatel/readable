import React from 'react';
import IconButton from '../ui/IconButton';

const CommentActions = props => (
  <React.Fragment>
    <IconButton
      id="delete"
      icon="delete"
      iconColor="red-400"
      onClick={() => props.deleteComment(props.comment.id)}
    />

    <IconButton id="edit" icon="edit" iconColor="blue-400" />
  </React.Fragment>
);

export default CommentActions;
