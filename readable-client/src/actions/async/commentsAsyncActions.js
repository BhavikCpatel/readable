import {
  requestSetCommentCnt,
  requestPostComments,
  postCommentsReceived,
  postCommentsFailed,
  requestDeleteComment,
  deleteCommentSucceeded,
  deleteCommentFailed,
  requestEditComment,
  editCommentSucceeded,
  editCommentFailed,
  requestAddComment,
  addCommentSucceeded,
  addCommentFailed,
} from '../commentsActions';
import * as commentApi from '../../services/commentsApi';

/* Async thunk action to get comments by post */
export const getCommentsByPost = postId => dispatch => {
  dispatch(requestPostComments({ postId }));
  commentApi
    .getCommentsByPost(postId, postCommentsReceived, postCommentsFailed)
    .then(action => {
      dispatch(Object.assign({}, action, { postId }));
    });
};
/* Async thunk action to delete comment */
export const deleteComment = commentId => dispatch => {
  dispatch(requestDeleteComment({ commentId }));
  commentApi
    .deleteComment(commentId, deleteCommentSucceeded, deleteCommentFailed)
    .then(action => {
      dispatch(action);
      // success dependant action
      if (!action.error) {
        dispatch(
          requestSetCommentCnt({ postId: action.payload.parentId, value: -1 }),
        );
      }
    });
};
/* Async thunk action to edit/update comment */
export const editComment = comment => dispatch => {
  dispatch(requestEditComment(comment));
  return commentApi
    .updateComment(comment, editCommentSucceeded, editCommentFailed)
    .then(action => {
      dispatch(action);
      return action.error
        ? Promise.reject(comment.id)
        : Promise.resolve(comment.id);
    });
};
/* Async thunk action to add a new comment */
export const addComment = comment => dispatch => {
  dispatch(requestAddComment(comment));
  return commentApi
    .saveComment(comment, addCommentSucceeded, addCommentFailed)
    .then(action => {
      dispatch(action);
      // success dependant action
      if (!action.error) {
        dispatch(
          requestSetCommentCnt({ postId: action.payload.parentId, value: 1 }),
        );
      }
      return action.error
        ? Promise.reject(comment.id)
        : Promise.resolve(comment.id);
    });
};
