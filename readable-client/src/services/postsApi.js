import { processHttpRequest } from './httpService';

// Get Posts By Categories
export const getPostsByCategory = (
  category,
  successActionCreator,
  rejectActionCreator,
) => {
  const path = category === 'all' ? '/posts' : `/${category}/posts`;
  return processHttpRequest(path, successActionCreator, rejectActionCreator);
};

// save a new Post
export const savePost = (post, successActionCreator, rejectActionCreator) => {
  const option = {
    body: JSON.stringify(post),
    method: 'POST',
  };

  return processHttpRequest(
    `/posts`,
    successActionCreator,
    rejectActionCreator,
    option,
  );
};

// Update post
export const updatePost = (post, successActionCreator, rejectActionCreator) => {
  const option = {
    body: JSON.stringify({ body: post.body, title: post.title }),
    method: 'PUT',
  };

  return processHttpRequest(
    `/posts/${post.id}`,
    successActionCreator,
    rejectActionCreator,
    option,
  );
};

// Delete Post
export const deletePost = (
  postId,
  successActionCreator,
  rejectActionCreator,
) => {
  const option = { method: 'DELETE' };

  return processHttpRequest(
    `/posts/${postId}`,
    successActionCreator,
    rejectActionCreator,
    option,
  );
};

// Get Post By Id
export const getPostById = (id, successActionCreator, rejectActionCreator) =>
  processHttpRequest(`/posts/${id}`, successActionCreator, rejectActionCreator);
