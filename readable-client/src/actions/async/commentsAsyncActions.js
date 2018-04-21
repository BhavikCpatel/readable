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
import * as api from '../../services/commentsApi';

export const getCommentsByPost = postId => dispatch => {
  dispatch(requestPostComments({ postId }));
  api
    .getCommentsByPost(postId, postCommentsReceived, postCommentsFailed)
    .then(action => {
      dispatch(Object.assign({}, action, { postId }));
    });
};

export const deleteComment = commentId => dispatch => {
  dispatch(requestDeleteComment({ commentId }));
  api
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

export const editComment = comment => dispatch => {
  dispatch(requestEditComment(comment));
  api
    .updateComment(comment, editCommentSucceeded, editCommentFailed)
    .then(action => dispatch(action));
  // .then(payload => dispatch(editCommentSucceeded({ payload })))
  // .catch(error => dispatch(editCommentFailed(error)));
};

export const addComment = comment => dispatch => {
  dispatch(requestAddComment(comment));
  api
    .saveComment(comment, addCommentSucceeded, addCommentFailed)
    .then(action => {
      dispatch(action);
      // success dependant action
      if (!action.error) {
        dispatch(
          requestSetCommentCnt({ postId: action.payload.parentId, value: 1 }),
        );
      }
    });
};
