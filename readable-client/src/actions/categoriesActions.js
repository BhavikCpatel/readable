import * as Action from '../constants';
import { createAction } from '../utils';

/* Action Creator for GET_POST_CATEGORY_REQUEST */
export const requestPostCategory = createAction(
  Action.CATEGORY.POST_CATEGORY,
  Action.METHOD.GET,
  Action.STATUS.REQUEST,
);
/* Action Creator for GET_POST_CATEGORY_SUCCEEDED */
export const postCategoryReceived = createAction(
  Action.CATEGORY.POST_CATEGORY,
  Action.METHOD.GET,
  Action.STATUS.SUCCEEDED,
);
/* Action Creator for GET_POST_CATEGORY_FAILED */
export const postCategoryFailed = createAction(
  Action.CATEGORY.POST_CATEGORY,
  Action.METHOD.GET,
  Action.STATUS.FAILED,
);
