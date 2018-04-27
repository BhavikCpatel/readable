import * as Action from '../constants';
import { createAction, createActionWithNotification } from '../utils';

export const submitPostVote = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.VOTE,
  Action.STATUS.REQUEST,
);
export const postVoteSuccessed = createActionWithNotification(
  createAction(
    Action.CATEGORY.POST,
    Action.METHOD.VOTE,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Your vote has been registered successfully',
      messageType: 'success',
    },
  }),
);
export const postVoteFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.VOTE, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Unable to register your vote, Please try again',
      messageType: 'error',
    },
  }),
);

export const submitCommentVote = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.VOTE,
  Action.STATUS.REQUEST,
);
export const commentVoteSuccessed = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.VOTE,
    Action.STATUS.SUCCEEDED,
  )({
    uiNotification: {
      message: 'Your vote has been registered successfully',
      messageType: 'success',
    },
  }),
);
export const commentVoteFailed = createActionWithNotification(
  createAction(
    Action.CATEGORY.COMMENT,
    Action.METHOD.VOTE,
    Action.STATUS.FAILED,
  )({
    uiNotification: {
      message: 'Unable to register your vote, Please try again',
      messageType: 'error',
    },
  }),
);
