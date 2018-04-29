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
import * as generalApi from '../../services/generalApi';

/* Async thunk action to sort posts */
export const orderPosts = (orderBy, orderType) => dispatch => {
  dispatch(requestOrderPosts({ orderBy, orderType }));
};
/**
 * @function processVote
 * @description Process Vote action based on category : (post or comment)
 * @param {*} dispatch
 * @param {string} voteParam
 * @param {function} submitVote
 * @param {function} voteSuccessed
 * @param {function} voteFailed
 */
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
  return generalApi
    .registerVote(voteParam, voteSuccessed, voteFailed)
    .then(action => dispatch(action));
}

/* Async thunk action to register a vote for a post or comment */
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
