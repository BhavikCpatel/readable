import React from 'react';
import PropTypes from 'prop-types';
import { postPropTypes } from '../../utils/propTypesDefs';
import PostCard from './PostCard';

const Post = ({ post, deletePost, dCells, tCells }) => (
  <div
    className={`mdl-cell 
      mdl-cell--${dCells}-col 
      mdl-cell--${tCells}-col-tablet 
      mdl-cell--4-col-phone 
      mdl-card mdl-shadow--4dp 
      post-card`}
  >
    <PostCard post={post} deletePost={deletePost} />
  </div>
);

Post.propTypes = {
  post: postPropTypes,
  deletePost: PropTypes.func.isRequired,
  dCells: PropTypes.number,
  tCells: PropTypes.number,
};

Post.defaultProps = {
  post: null,
  dCells: 4,
  tCells: 4,
};

export default Post;
