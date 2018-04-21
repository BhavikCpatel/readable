import * as Action from '../constants';
import { createAction } from '../utils';

const requestOrderPosts = createAction(
  Action.CATEGORY.UI,
  Action.METHOD.ORDER,
  Action.STATUS.REQUEST,
);

export default requestOrderPosts;
