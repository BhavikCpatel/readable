import React from 'react';
import PropTypes from 'prop-types';
import { commentPropTypes } from '../../utils/propTypesDefs';
import IconButton from '../ui/IconButton';

const CommentActions = props => (
  <React.Fragment>
    <IconButton
      id="delete"
      icon="delete"
      iconColor="red-400"
      onClick={() => props.deleteComment(props.comment.id)}
    />

    <IconButton
      onClick={props.onEditRequest}
      id="edit"
      icon="edit"
      iconColor="blue-400"
    />
  </React.Fragment>
);

CommentActions.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  onEditRequest: PropTypes.func.isRequired,
  comment: commentPropTypes.isRequired,
};

export default CommentActions;
