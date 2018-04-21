import React from 'react';
import Post from './Post';

const PostsList = ({ posts, deletePost, isLoading, error }) => (
  <section className="posts-container">
    <div className="post-card-container mdl-grid">
      {posts &&
        posts.map(post => (
          <Post
            key={post.id}
            dCells={posts.length > 3 ? 3 : 12 / posts.length}
            tCells={posts.length > 1 ? 4 : 8}
            post={post}
            deletePost={deletePost}
          />
        ))}
    </div>
  </section>
);

export default PostsList;
