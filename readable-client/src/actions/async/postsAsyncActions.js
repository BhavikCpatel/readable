import {
  requestPosts,
  postsReceived,
  postsFailed,
  requestPostById,
  postByIdReceived,
  postByIdFailed,
  requestDeletePost,
  deletePostSucceeded,
  deletePostFailed,
  requestEditPost,
  editPostSucceeded,
  editPostFailed,
  requestAddPost,
  addPostSucceeded,
  addPostFailed,
} from '../postsActions';
import * as api from '../../services/postsApi';

export const getPostsByCategory = category => dispatch => {
  const postCategory = category || 'all';
  dispatch(requestPosts({ postCategory }));
  api
    .getPostsByCategory(postCategory, postsReceived, postsFailed)
    .then(action => dispatch(Object.assign({}, action, { postCategory })));
};
export const getPostById = id => dispatch => {
  // console.log('getting post', id);
  dispatch(requestPostById({ id }));
  api
    .getPostById(id, postByIdReceived, postByIdFailed)
    .then(action => dispatch(action));
};

export const deletePost = (postId, callback) => dispatch => {
  dispatch(requestDeletePost({ postId }));
  api.deletePost(postId, deletePostSucceeded, deletePostFailed).then(action => {
    if (callback) {
      callback();
    }
    dispatch(action);
  });
};
export const editPost = post => dispatch => {
  dispatch(requestEditPost({ post }));
  return api
    .updatePost(post, editPostSucceeded, editPostFailed)
    .then(action => {
      dispatch(action);

      return action.error ? Promise.reject(post.id) : Promise.resolve(post.id);
    });
};

export const addPost = post => dispatch => {
  dispatch(requestAddPost(post));
  return api.savePost(post, addPostSucceeded, addPostFailed).then(action => {
    dispatch(action);

    return action.error ? Promise.reject(post.id) : Promise.resolve(post.id);
  });
};
