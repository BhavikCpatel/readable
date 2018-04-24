import React from 'react';
import Post from './Post';
import AddPostButton from './AddPostButton';
import PostsOrderMenu from './PostsOrderMenu';
import { sortOrderMap } from '../../utils';

const PostsList = ({
  posts,
  deletePost,
  isLoading,
  error,
  currentSortOrder,
  orderPosts,
}) => (
  <section className="posts-container">
    <div className="mdl-typography--display-1">
      Posts
      {isLoading && <span className="mdl-spinner mdl-js-spinner is-active" />}
    </div>
    <div className="post-card-container mdl-grid">
      {!isLoading && (
        <React.Fragment>
          <div className="mdl-cell mdl-cell--2-col">
            <PostsOrderMenu
              currentSortOrder={currentSortOrder}
              orderPosts={orderPosts}
            />
          </div>
          <div className="mdl-cell mdl-cell--2-col mdl-cell--4-offset-tablet mdl-cell--8-offset-desktop mdl-typography--text-right">
            <AddPostButton />
          </div>
        </React.Fragment>
      )}
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
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--4-col">
        <span className="mdl-chip mdl-chip--contact ">
          <span className="mdl-chip__contact mdl-color--pink-600 mdl-color-text--white">
            {posts.length}
          </span>
          <span className="mdl-chip__text">Posts</span>
        </span>
      </div>
      <div className="mdl-cell mdl-cell--4-col  mdl-cell--4-offset-desktop mdl-typography--text-right">
        <span className="mdl-chip">
          <span className="mdl-chip__text  mdl-color-text--pink-600">
            Sorted on: {sortOrderMap.get(currentSortOrder)}
          </span>
        </span>
      </div>
    </div>
  </section>
);

export default PostsList;
