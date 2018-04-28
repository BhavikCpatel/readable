import React from 'react';
import PropTypes from 'prop-types';
import { postPropTypes } from '../../utils/propTypesDefs';
import Post from './Post';
import AddPostButton from './AddPostButton';
import PostsOrderMenu from './PostsOrderMenu';
import { sortOrderMap } from '../../utils';
import withLoader from '../../utils/withLoader';

const PostsList = ({
  posts,
  deletePost,
  error,
  currentSortOrder,
  orderPosts,
}) => (
  <section className="posts-container">
    <div className="mdl-typography--display-1">Posts</div>

    <div className="post-card-container mdl-grid">
      <React.Fragment>
        <div className="mdl-cell mdl-cell--4-col">
          <PostsOrderMenu
            currentSortOrder={currentSortOrder}
            orderPosts={orderPosts}
          />
        </div>
        <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop mdl-typography--text-right">
          <AddPostButton />
        </div>
      </React.Fragment>

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
      {posts &&
        posts.length === 0 &&
        !error && (
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
              <span className="mdl-typography--headline mdl-typography--text-center">
                Welcome!, Be brave and add a new post using [Add Post] button
              </span>
            </div>
          </div>
        )}
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

PostsList.propTypes = {
  posts: PropTypes.arrayOf(postPropTypes),
  deletePost: PropTypes.func.isRequired,
  error: PropTypes.string,
  currentSortOrder: PropTypes.string.isRequired,
  orderPosts: PropTypes.func.isRequired,
};

PostsList.defaultProps = {
  error: null,
  posts: [],
};
export default withLoader(PostsList, 'Posts : Loading...');
