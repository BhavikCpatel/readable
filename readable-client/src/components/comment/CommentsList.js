import React from 'react';
import PropTypes from 'prop-types';
import { commentPropTypes } from '../../utils/propTypesDefs';
import Comment from './Comment';
import withLoader from '../containers/withLoader';

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

CommentsList.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(commentPropTypes),
};

CommentsList.defaultProps = {
  comments: null,
};

export default withLoader(CommentsList);
