import React from 'react';
import Post from './Post';

const PostsList = props => (
  <section className="posts-container">
    <div className="post-card-container mdl-grid">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </section>
);

export default PostsList;
