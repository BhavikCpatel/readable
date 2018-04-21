import {
  requestPostCategory,
  postCategoryReceived,
  postCategoryFailed,
} from '../categoriesActions';
import * as api from '../../services/generalApi';
// async thunk action
const loadCategories = () => dispatch => {
  dispatch(requestPostCategory());
  api.getCategories(postCategoryReceived, postCategoryFailed).then(action => {
    // console.log('CAT LOAD', action);
    dispatch(action);
  });
};

export default loadCategories;
