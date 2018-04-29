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

import * as postApi from '../../services/postsApi';
/* Async thunk action to get posts by category */
export const getPostsByCategory = category => dispatch => {
  const postCategory = category || 'all';
  dispatch(requestPosts({ postCategory }));
  postApi
    .getPostsByCategory(postCategory, postsReceived, postsFailed)
    .then(action => dispatch(Object.assign({}, action, { postCategory })));
};
/* Async thunk action to get post by Id */
export const getPostById = id => dispatch => {
  // console.log('getting post', id);
  dispatch(requestPostById({ id }));
  postApi
    .getPostById(id, postByIdReceived, postByIdFailed)
    .then(action => dispatch(action));
};
/* Async thunk action to delete post by Id */
export const deletePost = (postId, callback) => dispatch => {
  dispatch(requestDeletePost({ postId }));
  postApi
    .deletePost(postId, deletePostSucceeded, deletePostFailed)
    .then(action => {
      if (callback) {
        callback();
      }

      dispatch(action);
    });
};

/* Async thunk action to edit post */
export const editPost = post => dispatch => {
  dispatch(requestEditPost({ post }));
  return postApi
    .updatePost(post, editPostSucceeded, editPostFailed)
    .then(action => {
      dispatch(action);

      return action.error ? Promise.reject(post.id) : Promise.resolve(post.id);
    });
};
/* Async thunk action to add a new post */
export const addPost = post => dispatch => {
  dispatch(requestAddPost(post));
  return postApi
    .savePost(post, addPostSucceeded, addPostFailed)
    .then(action => {
      dispatch(action);
      return action.error ? Promise.reject(post.id) : Promise.resolve(post.id);
    });
};
