import * as Action from '../constants';
import { createAction, createActionWithNotification } from '../utils';

/* Vote for Posts - Action Creators */
/* Action Creator for VOTE_POST_REQUEST */
export const submitPostVote = createAction(
  Action.CATEGORY.POST,
  Action.METHOD.VOTE,
  Action.STATUS.REQUEST,
);
/* Action Creator for VOTE_POST_SUCCEEDED with UI Notification message */
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
/* Action Creator for VOTE_POST_FAILED with UI Notification message */
export const postVoteFailed = createActionWithNotification(
  createAction(Action.CATEGORY.POST, Action.METHOD.VOTE, Action.STATUS.FAILED)({
    uiNotification: {
      message: 'Unable to register your vote, Please try again',
      messageType: 'error',
    },
  }),
);

/* Vote for comments - Action Creators */
/* Action Creator for VOTE_COMMENT_REQUEST */
export const submitCommentVote = createAction(
  Action.CATEGORY.COMMENT,
  Action.METHOD.VOTE,
  Action.STATUS.REQUEST,
);
/* Action Creator for VOTE_COMMENT_SUCCEEDED with UI Notification message */
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
/* Action Creator for VOTE_COMMENT_FAILED with UI Notification message */
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
