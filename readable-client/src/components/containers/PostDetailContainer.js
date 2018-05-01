import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postPropTypes } from '../../utils/propTypesDefs';
import { deletePost, getPostById } from '../../actions/async/postsAsyncActions';
import PostDetail from '../post/PostDetail';

class PostsDetailContainer extends React.Component {
  static propTypes = {
    post: postPropTypes,
    postId: PropTypes.string.isRequired,
    error: PropTypes.string,
    deletePost: PropTypes.func.isRequired,
    getPostById: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    post: null,
    error: null,
  };
  componentDidMount() {
    /*
    Redirect use to 404 in case if Post doesn't exist
    */
    if (!this.props.post && this.props.postId) {
      this.props
        .getPostById(this.props.postId)
        .catch(() => this.props.history.push('/error/404'));
    }
  }

  /*
    onDeletePostHandler: used to Redirect user when Post is deleted successfully.
  */
  onDeletePostHandler(postId) {
    this.props.deletePost(postId).then(() => this.props.history.push('/'));
  }
  render() {
    return (
      <PostDetail
        post={this.props.post}
        deletePost={postId => this.onDeletePostHandler(postId)}
        history={this.props.history}
        error={this.props.error}
      />
    );
  }
}
const mapStateToProps = ({ posts }, ownProps) => {
  const { postId } = ownProps.match.params;
  const filteredPost = posts.data.filter(post => post.id === postId);

  return {
    post: filteredPost[0] || null,
    postId,
    isLoading: posts.isLoading,
    error: posts.error,
  };
};

const mapDispatchToProps = {
  deletePost,
  getPostById,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsDetailContainer),
);
