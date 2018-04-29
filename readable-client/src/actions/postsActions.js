import * as Action from '../constants';
import { createAction, createActionWithNotification } from '../utils';

/* Posts List Action Creators */

/* Action Creator for GET_POST_REQUEST */
export const requestPosts = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.GET,
  Action.STATUS.REQUEST,
);
/* Action Creator for GET_POST_SUCCEEDED */
export const postsReceived = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.GET,
  Action.STATUS.SUCCEEDED,
);
/* Action Creator for GET_POST_FAILED with UI Notification message */
export const postsFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.GET, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Unable to get posts, Please try again',
      messageType: 'error',
    },
  }),
);

/* Post By Id Action Creators

/* Action Creator for FIND_BY_ID_POST_REQUEST */
export const requestPostById = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.FIND_BY_ID,
  Action.STATUS.REQUEST,
);

/* Action Creator for FIND_BY_ID_POST_SUCCEEDED */
export const postByIdReceived = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.FIND_BY_ID,
  Action.STATUS.SUCCEEDED,
);
/* Action Creator for FIND_BY_ID_POST_FAILED with UI Notification message */
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

/* Delete Post Action Creators */
/* Action Creator for DELETE_POST_REQUEST */
export const requestDeletePost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.DELETE,
  Action.STATUS.REQUEST,
);
/* Action Creator for DELETE_POST_SUCCEEDED with UI Notification message */
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
/* Action Creator for DELETE_POST_FAILED with UI Notification message */
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

/* Edit Post Action Creators */

/* Action Creator for EDIT_POST_REQUEST */
export const requestEditPost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.EDIT,
  Action.STATUS.REQUEST,
);
/* Action Creator for EDIT_POST_SUCCEEDED with UI Notification message */
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
/* Action Creator for EDIT_POST_FAILED with UI Notification message */
export const editPostFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.EDIT, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Error while updating post, Please try again',
      messageType: 'error',
    },
  }),
);

/* Add Post Action Creators */
/* Action Creator for ADD_POST_REQUEST */
export const requestAddPost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.ADD,
  Action.STATUS.REQUEST,
);
/* Action Creator for ADD_POST_SUCCEEDED with UI Notification message */
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
/* Action Creator for ADD_POST_FAILED with UI Notification message */
export const addPostFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.ADD, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Unable to add post, Please try again',
      messageType: 'error',
    },
  }),
);
