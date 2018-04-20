import React from 'react';
import Post from './Post';
const PostsList = props => (
  <section class="posts-container">
    <div class="post-card-container mdl-grid">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </section>
);

export default PostsList;
