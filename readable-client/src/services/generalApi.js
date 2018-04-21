import { processHttpRequest } from './httpService';
import { CATEGORY } from '../constants';

/* Categories API */
export const getCategories = (successActionCreator, rejectActionCreator) =>
  processHttpRequest('/categories', successActionCreator, rejectActionCreator);

/* Vote API */
export const registerVote = (
  voteParam,
  successActionCreator,
  rejectActionCreator,
) => {
  const path =
    voteParam.voteCategory === CATEGORY.POST
      ? `/posts/${voteParam.id}`
      : `/comments/${voteParam.id}`;
  const option = {
    body: JSON.stringify({ option: voteParam.key }),
    method: 'POST',
  };

  return processHttpRequest(
    path,
    successActionCreator,
    rejectActionCreator,
    option,
  );
};
