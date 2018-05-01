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
    categoryFound: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
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
    /*
    Redirect user to 404 in case if category doesn't exist
    */

    if (this.props.filterByCategory !== prevProps.filterByCategory) {
      this.loadPostsByCategory(this.props.filterByCategory);
    }
    if (!this.props.categoryFound) {
      this.props.history.push('/error/404');
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

// Filter Posts by category
const filterPostsByCategory = (posts, category) =>
  category ? posts.filter(post => post.category === category) : posts;

// Check if route category is valid or not
// used to redirect invalid category request to 404
const isValidCategory = (categoryList, currentCategory) => {
  if (currentCategory && categoryList.length) {
    const index = categoryList.findIndex(
      category => category.name === currentCategory,
    );

    return !(index < 0);
  }
  return true;
};

// Order posts
const withOrder = (posts, postSortOrder) => {
  const sortOrder = postSortOrder.orderType === 'desc' ? 1 : -1;
  const { orderBy } = postSortOrder;
  return posts
    .slice()
    .sort((postA, postB) => sortOrder * (postB[orderBy] - postA[orderBy]));
};

const mapStateToProps = ({ posts, ui, categories }, ownProps) => {
  // Get category from route params

  let postCategory = ownProps.match.params.category;
  postCategory = postCategory === 'all' ? '' : postCategory;

  // Filter and order posts
  const filteredAndOrderPosts = withOrder(
    filterPostsByCategory(posts.data || [], postCategory),
    ui.postSortOrder,
  );

  // return props
  return {
    posts: filteredAndOrderPosts,
    filterByCategory: postCategory || 'all',
    isLoading: posts.isLoading,
    error: posts.error,
    postSortOrder: ui.postSortOrder,
    categoryFound: isValidCategory(categories.data, postCategory),
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
