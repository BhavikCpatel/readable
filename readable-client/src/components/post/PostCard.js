import React from 'react';
import PostContent from './PostContent';
import PostCardCategory from './PostCardCategory';
import PostCardTitle from './PostCardTitle';
import PostCardActions from './PostCardActions';

const Post = ({ post, deletePost, isDetailCard = false, onCommentAdd }) =>
  post && (
    <React.Fragment>
      <PostCardCategory category={post.category} />
      <PostCardTitle title={post.title} />
      <PostContent post={post} isDetailCard={isDetailCard} />
      <PostCardActions
        postId={post.id}
        voteScore={post.voteScore}
        isDetailCard={isDetailCard}
        deletePost={deletePost}
        onCommentAdd={onCommentAdd}
      />
    </React.Fragment>
  );

export default Post;
