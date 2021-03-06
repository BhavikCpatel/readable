import { combineReducers } from 'redux';
import ui from './ui';
import categories from './categories';
import posts from './posts';
import comments from './comments';

/* Root Reducer for app */
export default combineReducers({
  categories,
  comments,
  posts,
  ui,
});
