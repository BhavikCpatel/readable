import { requestOrderPosts } from '../uiActions';
import {
  submitPostVote,
  postVoteSuccessed,
  postVoteFailed,
  submitCommentVote,
  commentVoteSuccessed,
  commentVoteFailed,
} from '../voteActions';
import { CATEGORY } from '../../constants';

import * as api from '../../services/generalApi';

export const orderPosts = (orderBy, orderType) => dispatch => {
  dispatch(requestOrderPosts({ orderBy, orderType }));
};

/*
export const hideNotification = () => dispatch => {
  dispatch(clearNotification());
}; */

function processVote(
  dispatch,
  voteParam,
  submitVote,
  voteSuccessed,
  voteFailed,
) {
  dispatch(
    submitVote({
      voteCategory: voteParam.voteCategory,
      id: voteParam.id,
      key: voteParam.key,
    }),
  );
  return api
    .registerVote(voteParam, voteSuccessed, voteFailed)
    .then(action => dispatch(action));
}

export const registerVote = voteParam => dispatch => {
  if (voteParam.voteCategory === CATEGORY.POST) {
    return processVote(
      dispatch,
      voteParam,
      submitPostVote,
      postVoteSuccessed,
      postVoteFailed,
    );
  }
  return processVote(
    dispatch,
    voteParam,
    submitCommentVote,
    commentVoteSuccessed,
    commentVoteFailed,
  );
};
