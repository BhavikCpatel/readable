import React from 'react';
import PropTypes from 'prop-types';
import PostContent from './PostContent';
import PostCardCategory from './PostCardCategory';
import PostCardTitle from './PostCardTitle';
import PostCardActions from './PostCardActions';
import { postPropTypes } from '../../utils/propTypesDefs';

const PostCard = ({ post, deletePost, isDetailCard, onCommentAdd }) =>
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

PostCard.propTypes = {
  post: postPropTypes,
  deletePost: PropTypes.func.isRequired,
  isDetailCard: PropTypes.bool,
  onCommentAdd: PropTypes.func,
};

PostCard.defaultProps = {
  isDetailCard: false,
  onCommentAdd: null,
};
export default PostCard;
