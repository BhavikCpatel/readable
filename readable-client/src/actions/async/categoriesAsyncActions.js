import {
  requestPostCategory,
  postCategoryReceived,
  postCategoryFailed,
} from '../categoriesActions';
import * as generalApi from '../../services/generalApi';

// async thunk action to get categories
const loadCategories = () => dispatch => {
  dispatch(requestPostCategory());
  generalApi
    .getCategories(postCategoryReceived, postCategoryFailed)
    .then(action => {
      // console.log('CAT LOAD', action);
      dispatch(action);
    });
};

export default loadCategories;
