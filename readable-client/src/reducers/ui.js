import { CATEGORY as ACTION_CATEGORY } from '../constants';

const ui = (state = { orderBy: 'timestamp', orderType: 'desc' }, action) => {
  if (action.category === ACTION_CATEGORY.UI) {
    return { orderBy: action.orderBy, orderType: action.orderType };
  }
  return state;
};

export default ui;
