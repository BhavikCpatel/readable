import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getPostsByCategory,
  deletePost,
} from '../../actions/async/postsAsyncActions';
import { orderPosts } from '../../actions/async/generalAsyncActions';

import PostsList from '../post/PostsList';

class PostsListContainer extends React.Component {
  componentDidMount() {
    this.loadPostsByCategory(this.props.filterByCategory);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filterByCategory !== prevProps.filterByCategory) {
      this.loadPostsByCategory(this.props.filterByCategory);
    }
  }

  loadPostsByCategory(category) {
    this.props.getPostsByCategory(category);
  }

  render() {
    return (
      <PostsList
        posts={this.props.posts}
        deletePost={this.props.deletePost}
        isLoading={this.props.isLoading}
        error={this.props.error}
        currentSortOrder={`${this.props.sortBy}-${this.props.sortOrder}`}
        orderPosts={this.props.orderPosts}
      />
    );
  }
}

const filterPostsByCategory = (posts, category) =>
  category ? posts.filter(post => post.category === category) : posts;

const withOrder = (posts, orderBy, orderType) => {
  const sortOrder = orderType === 'desc' ? 1 : -1;
  return posts
    .slice()
    .sort((postA, postB) => sortOrder * (postB[orderBy] - postA[orderBy]));
};
const mapStateToProps = ({ posts, ui }, ownProps) => {
  const filteredAndOrderPosts = withOrder(
    filterPostsByCategory(posts.data || [], ownProps.match.params.category),
    ui.orderBy,
    ui.orderType,
  );

  return {
    posts: filteredAndOrderPosts,
    filterByCategory: ownProps.match.params.category || 'all',
    isLoading: posts.isLoading,
    category: posts.postCategory,
    error: posts.error,
    sortBy: ui.orderBy,
    sortOrder: ui.orderType || 'desc',
  };
};

const mapDispatchToProps = {
  getPostsByCategory,
  orderPosts,
  deletePost,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsListContainer),
);
