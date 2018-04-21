import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  deleteComment,
  editComment,
  addComment,
  getCommentsByPost,
} from '../../actions/async/commentsAsyncActions';

import PostCommentsList from '../comment/PostCommentsList';

class PostCommentsContainer extends React.Component {
  componentDidMount() {
    this.props.getCommentsByPost(this.props.postId);
  }
  componentDidUpdate(prevProps) {
    if (this.props.postId !== prevProps.postId) {
      this.props.getCommentsByPost(this.props.postId);
    }
  }

  render() {
    return <PostCommentsList {...this.props} />;
  }
}
const mapStateToProps = ({ comments }, ownProps) => {
  const postId = ownProps.postId;

  return {
    postId,
    comments: comments.data ? comments.data[postId] : undefined,
    isLoading: comments.isLoading,
    error: comments.error,
  };
};

const mapDispatchToProps = {
  deleteComment,
  addComment,
  editComment,
  getCommentsByPost,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostCommentsContainer),
);
