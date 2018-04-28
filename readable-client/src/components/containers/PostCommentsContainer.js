import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { commentPropTypes } from '../../utils/propTypesDefs';
import {
  deleteComment,
  editComment,
  addComment,
  getCommentsByPost,
} from '../../actions/async/commentsAsyncActions';

import PostCommentsList from '../comment/PostCommentsList';

class PostCommentsContainer extends React.Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(commentPropTypes),
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    deleteComment: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    getCommentsByPost: PropTypes.func.isRequired,
  };
  static defaultProps = {
    comments: null,
    error: null,
    isLoading: false,
  };
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
