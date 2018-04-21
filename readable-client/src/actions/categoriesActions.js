import * as Action from '../constants';
import { createAction } from '../utils';

export const requestPostCategory = createAction(
  Action.CATEGORY.POST_CATEGORY,
  Action.METHOD.GET,
  Action.STATUS.REQUEST,
);
export const postCategoryReceived = createAction(
  Action.CATEGORY.POST_CATEGORY,
  Action.METHOD.GET,
  Action.STATUS.SUCCEEDED,
);
export const postCategoryFailed = createAction(
  Action.CATEGORY.POST_CATEGORY,
  Action.METHOD.GET,
  Action.STATUS.FAILED,
);
