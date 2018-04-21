import * as Action from '../constants';
import { createAction } from '../utils';

export const submitPostVote = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.VOTE,
  Action.STATUS.REQUEST,
);
export const postVoteSuccessed = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.VOTE,
  Action.STATUS.SUCCEEDED,
);
export const postVoteFailed = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.VOTE,
  Action.STATUS.FAILED,
);

export const submitCommentVote = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.VOTE,
  Action.STATUS.REQUEST,
);
export const commentVoteSuccessed = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.VOTE,
  Action.STATUS.SUCCEEDED,
);
export const commentVoteFailed = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.VOTE,
  Action.STATUS.FAILED,
);
