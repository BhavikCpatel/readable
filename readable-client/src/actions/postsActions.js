import * as Action from '../constants';
import { createAction, createActionWithNotification } from '../utils';

export const requestPosts = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.GET,
  Action.STATUS.REQUEST,
);

export const postsReceived = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.GET,
  Action.STATUS.SUCCEEDED,
);

export const postsFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.GET, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Unable to get posts, Please try again',
      messageType: 'error',
    },
  }),
);

export const requestPostById = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.FIND_BY_ID,
  Action.STATUS.REQUEST,
);
export const postByIdReceived = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.FIND_BY_ID,
  Action.STATUS.SUCCEEDED,
);
export const postByIdFailed = createActionWithNotification(
  createAction(
    Action.CATEGORY.POST,
    Action.METHOD.FIND_BY_ID,
    Action.STATUS.FAILED,
  )({
    uiNotification: {
      message: 'Unable to get post, Please try again',
      messageType: 'error',
    },
  }),
);

export const requestDeletePost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.DELETE,
  Action.STATUS.REQUEST,
);

export const deletePostSucceeded = createActionWithNotification(
  createAction(
    Action.CATEGORY.POST,
    Action.METHOD.DELETE,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Post deleted successfully',
      messageType: 'success',
    },
  }),
);

export const deletePostFailed = createActionWithNotification(
  createAction(
    Action.CATEGORY.POST,
    Action.METHOD.DELETE,
    Action.STATUS.FAILED,
  )({
    uiNotification: {
      message: 'Unable to delete post, Please try again',
      messageType: 'error',
    },
  }),
);

export const requestEditPost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.EDIT,
  Action.STATUS.REQUEST,
);

export const editPostSucceeded = createActionWithNotification(
  createAction(
    Action.CATEGORY.POST,
    Action.METHOD.EDIT,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Post updated successfully',
      messageType: 'success',
    },
  }),
);

export const editPostFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.EDIT, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Error while updating post, Please try again',
      messageType: 'error',
    },
  }),
);

export const requestAddPost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.ADD,
  Action.STATUS.REQUEST,
);

export const addPostSucceeded = createActionWithNotification(
  createAction(
    Action.CATEGORY.POST,
    Action.METHOD.ADD,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Post is saved successfully',
      messageType: 'success',
    },
  }),
);

export const addPostFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.ADD, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Unable to add post, Please try again',
      messageType: 'error',
    },
  }),
);
