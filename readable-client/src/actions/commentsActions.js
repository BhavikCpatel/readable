import * as Action from '../constants';
import { createAction, createActionWithNotification } from '../utils';

export const requestPostComments = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.GET,
  Action.STATUS.REQUEST,
);
export const postCommentsReceived = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.GET,
  Action.STATUS.SUCCEEDED,
);
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

export const requestDeleteComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.DELETE,
  Action.STATUS.REQUEST,
);

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

export const requestEditComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.EDIT,
  Action.STATUS.REQUEST,
);

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

export const requestAddComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.ADD,
  Action.STATUS.REQUEST,
);

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
export const requestSetCommentCnt = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.SET_COMMENT_CNT,
  Action.STATUS.REQUEST,
);
