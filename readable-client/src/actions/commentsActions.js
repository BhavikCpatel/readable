import * as Action from '../constants';
import { createAction, createActionWithNotification } from '../utils';
/* Post Comments Action Creators */

/* Action Creator for GET_COMMENT_REQUEST */
export const requestPostComments = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.GET,
  Action.STATUS.REQUEST,
);
/* Action Creator for GET_COMMENT_SUCCEEDED */
export const postCommentsReceived = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.GET,
  Action.STATUS.SUCCEEDED,
);

/* Action Creator for GET_COMMENT_FAILED with UI Notification message */
export const postCommentsFailed = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.GET,
    Action.STATUS.FAILED,
  )({
    uiNotification: {
      message: 'Unable to retrieve comments, Please try again',
      messageType: 'error',
    },
  }),
);

/* Delete comments Action Creators */

/* Action Creator for DELETE_COMMENT_REQUEST */
export const requestDeleteComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.DELETE,
  Action.STATUS.REQUEST,
);

/* Action Creator for DELETE_COMMENT_SUCCEEDED with UI Notification message */
export const deleteCommentSucceeded = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.DELETE,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Comment deleted successfully',
      messageType: 'success',
    },
  }),
);
/* Action Creator for DELETE_COMMENT_FAILED with UI Notification message */
export const deleteCommentFailed = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.DELETE,
    Action.STATUS.FAILED,
  )({
    uiNotification: {
      message: 'Unable to delete comment, Please try again',
      messageType: 'error',
    },
  }),
);

/* Edit Comment Action Creators */
/* Action Creator for EDIT_COMMENT_REQUEST */
export const requestEditComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.EDIT,
  Action.STATUS.REQUEST,
);
/* Action Creator for EDIT_COMMENT_SUCCEEDED with UI Notification message */
export const editCommentSucceeded = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.EDIT,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Comment updated successfully',
      messageType: 'success',
    },
  }),
);
/* Action Creator for EDIT_COMMENT_FAILED with UI Notification message */
export const editCommentFailed = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.EDIT,
    Action.STATUS.FAILED,
  )({
    uiNotification: {
      message: 'Unable to update comment, Please try again',
      messageType: 'error',
    },
  }),
);

/* Add Comment Action Creator */
/* Action Creator for ADD_COMMENT_REQUEST */
export const requestAddComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.ADD,
  Action.STATUS.REQUEST,
);
/* Action Creator for ADD_COMMENT_SUCCEEDED with UI Notification message */
export const addCommentSucceeded = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.ADD,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Comment has been added successfully',
      messageType: 'success',
    },
  }),
);
/* Action Creator for ADD_COMMENT_FAILED with UI Notification message */
export const addCommentFailed = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.ADD,
    Action.STATUS.FAILED,
  )({
    uiNotification: {
      message: 'Unable to add comment, Please try again',
      messageType: 'error',
    },
  }),
);

/* Action Creator to update Comment counts */
/* Action Creator for SET_COMMENT_CNT_POST_REQUEST with UI Notification message */
export const requestSetCommentCnt = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.SET_COMMENT_CNT,
  Action.STATUS.REQUEST,
);
