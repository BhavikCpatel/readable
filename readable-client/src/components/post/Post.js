import React from 'react';
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

export default Post;
