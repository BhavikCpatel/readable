import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postPropTypes } from '../../utils/propTypesDefs';
import {
  getPostsByCategory,
  deletePost,
} from '../../actions/async/postsAsyncActions';
import { orderPosts } from '../../actions/async/generalAsyncActions';

import PostsList from '../post/PostsList';

class PostsListContainer extends React.Component {
  static propTypes = {
    getPostsByCategory: PropTypes.func.isRequired,
    orderPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(postPropTypes),
    filterByCategory: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    postSortOrder: PropTypes.shape({
      orderBy: PropTypes.string.isRequired,
      orderType: PropTypes.string.isRequired,
    }).isRequired,
  };
  static defaultProps = {
    error: null,
    posts: null,
  };
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
        currentSortOrder={`${this.props.postSortOrder.orderBy}-${
          this.props.postSortOrder.orderType
        }`}
        orderPosts={this.props.orderPosts}
      />
    );
  }
}

const filterPostsByCategory = (posts, category) =>
  category ? posts.filter(post => post.category === category) : posts;

const withOrder = (posts, postSortOrder) => {
  const sortOrder = postSortOrder.orderType === 'desc' ? 1 : -1;
  const { orderBy } = postSortOrder;
  return posts
    .slice()
    .sort((postA, postB) => sortOrder * (postB[orderBy] - postA[orderBy]));
};
const mapStateToProps = ({ posts, ui }, ownProps) => {
  const filteredAndOrderPosts = withOrder(
    filterPostsByCategory(posts.data || [], ownProps.match.params.category),
    ui.postSortOrder,
  );

  return {
    posts: filteredAndOrderPosts,
    filterByCategory: ownProps.match.params.category || 'all',
    isLoading: posts.isLoading,
    error: posts.error,
    postSortOrder: ui.postSortOrder,
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
