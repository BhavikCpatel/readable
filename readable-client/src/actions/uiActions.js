import * as Action from '../constants';
import { createAction } from '../utils';

export const requestOrderPosts = createAction(
  Action.CATEGORY.UI,
  Action.METHOD.ORDER,
  Action.STATUS.REQUEST,
);
export const notifyUser = createAction(
  Action.CATEGORY.UI,
  Action.METHOD.NOTIFICATION,
  Action.STATUS.REQUEST,
);
/*
export const clearNotification = createAction(
  Action.CATEGORY.UI,
  Action.METHOD.NOTIFICATION,
  Action.STATUS.REQUEST,
); */
