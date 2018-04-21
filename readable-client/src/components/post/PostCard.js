import React from 'react';
import PostContent from './PostContent';
import PostCardCategory from './PostCardCategory';
import PostCardTitle from './PostCardTitle';
import PostCardActions from './PostCardActions';

const Post = ({ post, deletePost, isDetailCard = false }) =>
  post && (
    <React.Fragment>
      <PostCardCategory category={post.category} />
      <PostCardTitle title={post.title} />
      <PostContent post={post} />
      <PostCardActions
        postId={post.id}
        isDetailCard={isDetailCard}
        deletePost={deletePost}
      />
    </React.Fragment>
  );

export default Post;
