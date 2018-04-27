import React from 'react';
import Comment from './Comment';
import withLoader from '../../utils/withLoader';

const CommentsList = props => {
  if (props.comments && props.comments.length > 0) {
    return (
      <ul className="comments-list mdl-list">
        {props.comments.map(comment => (
          <Comment
            deleteComment={props.deleteComment}
            editComment={props.editComment}
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    );
  }
  return <div>Be Brave!, Be the first one to comment on this post!</div>;
};

export default withLoader(CommentsList);
