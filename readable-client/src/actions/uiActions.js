import * as Action from '../constants';
import { createAction } from '../utils';
/* To Sort Posts */
/* Action Creator for ORDER_UI_REQUEST with UI Notification message */
export const requestOrderPosts = createAction(
  Action.CATEGORY.UI,
  Action.METHOD.ORDER,
  Action.STATUS.REQUEST,
);

/* Common Action for UI Notification 
  See services/notificationMiddleware.js 
  and Post/Comment/Category Action Creators for more detail */
/* Action Creator for NOTIFICATION_UI_REQUEST */
export const notifyUser = createAction(
  Action.CATEGORY.UI,
  Action.METHOD.NOTIFICATION,
  Action.STATUS.REQUEST,
);
