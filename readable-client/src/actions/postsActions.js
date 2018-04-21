import * as Action from '../constants';
import { createAction } from '../utils';

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

export const postsFailed = (method, error) => ({
  type: Action.CATEGORY.POST,
  status: Action.STATUS.FAILED,
  method, // this can be any one method from Action.METHOD.*
  error,
});

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
export const postByIdFailed = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.FIND_BY_ID,
  Action.STATUS.FAILED,
);

export const requestDeletePost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.DELETE,
  Action.STATUS.REQUEST,
);

export const deletePostSucceeded = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.DELETE,
  Action.STATUS.SUCCEEDED,
);

export const deletePostFailed = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.DELETE,
  Action.STATUS.FAILED,
);

export const requestEditPost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.EDIT,
  Action.STATUS.REQUEST,
);

export const editPostSucceeded = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.EDIT,
  Action.STATUS.SUCCEEDED,
);

export const editPostFailed = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.EDIT,
  Action.STATUS.FAILED,
);

export const requestAddPost = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.ADD,
  Action.STATUS.REQUEST,
);

export const addPostSucceeded = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.ADD,
  Action.STATUS.SUCCEEDED,
);

export const addPostFailed = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.ADD,
  Action.STATUS.FAILED,
);
