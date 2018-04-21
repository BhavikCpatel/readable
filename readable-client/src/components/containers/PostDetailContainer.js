import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePost, getPostById } from '../../actions/async/postsAsyncActions';
import PostDetail from '../post/PostDetail';

class PostsDetailContainer extends React.Component {
  componentDidMount() {
    if (!this.props.post && this.props.postId) {
      this.props.getPostById(this.props.postId);
    }
  }
  render() {
    return <PostDetail {...this.props} />;
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
