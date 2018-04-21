import * as Action from '../constants';
import { createAction } from '../utils';

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
export const postCommentsFailed = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.GET,
  Action.STATUS.FAILED,
);

export const requestDeleteComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.DELETE,
  Action.STATUS.REQUEST,
);

export const deleteCommentSucceeded = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.DELETE,
  Action.STATUS.SUCCEEDED,
);

export const deleteCommentFailed = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.DELETE,
  Action.STATUS.FAILED,
);

export const requestEditComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.EDIT,
  Action.STATUS.REQUEST,
);

export const editCommentSucceeded = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.EDIT,
  Action.STATUS.SUCCEEDED,
);

export const editCommentFailed = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.EDIT,
  Action.STATUS.FAILED,
);

export const requestAddComment = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.ADD,
  Action.STATUS.REQUEST,
);

export const addCommentSucceeded = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.ADD,
  Action.STATUS.SUCCEEDED,
);

export const addCommentFailed = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.ADD,
  Action.STATUS.FAILED,
);
export const requestSetCommentCnt = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.SET_COMMENT_CNT,
  Action.STATUS.REQUEST,
);
