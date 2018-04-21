import {
  CATEGORY as ACTION_CATEGORY,
  METHOD as ACTION_METHOD,
  STATUS as ACTION_STATUS,
} from '../constants';

const categories = (state = {}, action) => {
  if (action.category !== ACTION_CATEGORY.POST_CATEGORY) {
    return state;
  }
  // Update Loading Status
  if (action.method === ACTION_METHOD.GET) {
    switch (action.status) {
      case ACTION_STATUS.REQUEST:
        return Object.assign({}, state, { isLoading: true });
      case ACTION_STATUS.SUCCEEDED:
        return Object.assign({}, state, {
          data: [...action.payload.categories, { name: 'all', path: '' }],
          error: null,
          isLoading: false,
        });
      case ACTION_STATUS.FAILED:
        return Object.assign({}, state, {
          isLoading: false,
          data: [],
          error: action.error,
        });
      default:
        return state;
    }
  }
  return state;
};

export default categories;
