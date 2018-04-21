import { processHttpRequest } from './httpService';

// Get Comments By Post Id
export const getCommentsByPost = (
  postId,
  successActionCreator,
  rejectActionCreator,
) =>
  processHttpRequest(
    `/posts/${postId}/comments`,
    successActionCreator,
    rejectActionCreator,
  );

// Delete Comment by Id
export const deleteComment = (
  commentId,
  successActionCreator,
  rejectActionCreator,
) => {
  const option = { method: 'DELETE' };

  return processHttpRequest(
    `/comments/${commentId}`,
    successActionCreator,
    rejectActionCreator,
    option,
  );
};

// Add a new comment
export const saveComment = (
  comment,
  successActionCreator,
  rejectActionCreator,
) => {
  const option = {
    body: JSON.stringify(comment),
    method: 'POST',
  };

  return processHttpRequest(
    `/comments`,
    successActionCreator,
    rejectActionCreator,
    option,
  );
};

// update comment
export const updateComment = (
  comment,
  successActionCreator,
  rejectActionCreator,
) => {
  const option = {
    body: JSON.stringify({ body: comment.body, timestamp: comment.timestamp }),
    method: 'PUT',
  };

  return processHttpRequest(
    `/comments/${comment.id}`,
    successActionCreator,
    rejectActionCreator,
    option,
  );
};
