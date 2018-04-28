import React from 'react';
import PropTypes from 'prop-types';
import { commentPropTypes } from '../../utils/propTypesDefs';
import ColoredButton from '../ui/ColoredButton';
import CommentsList from '../comment/CommentsList';
import SectionHeader from '../ui/SectionHeader';
import CommentForm from './CommentForm';

class PostCommentsList extends React.Component {
  static propTypes = {
    postId: PropTypes.string,
    comments: PropTypes.arrayOf(commentPropTypes),
    deleteComment: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    postId: null,
    comments: null,
  };
  static getCommentCountTitle(isLoading, comments) {
    if (isLoading) {
      return ' Loading...';
    } else if (comments) {
      return comments.length;
    }
    return 0;
  }
  state = {
    showCommentForm: false,
  };
  onSaveHandler() {
    // FUTURE TODO: use comment argument to get updated comment from child component
    // console.log('move save routing to this comp', comment);
    this.setState({ showCommentForm: false });
  }
  onAddCommentHandler() {
    this.setState({ showCommentForm: true });
  }
  onFormCloseHandler() {
    this.setState({ showCommentForm: false });
  }

  render() {
    const {
      postId,
      comments,
      deleteComment,
      addComment,
      editComment,
      isLoading,
    } = this.props;

    return (
      <React.Fragment>
        <SectionHeader
          color="grey-600"
          title={`Comments (${PostCommentsList.getCommentCountTitle(
            isLoading,
            comments,
          )})`}
        />

        {this.state.showCommentForm && (
          <div className="mdl-card__supporting-text">
            <CommentForm
              mode="add"
              postId={postId}
              addComment={addComment}
              onClose={() => this.onFormCloseHandler()}
              onSave={comment => this.onSaveHandler(comment)}
            />
          </div>
        )}

        <div className="mdl-card__supporting-text">
          <CommentsList
            deleteComment={deleteComment}
            editComment={editComment}
            comments={comments}
            isLoading={isLoading}
          />
        </div>

        <div className="mdl-card__menu">
          <ColoredButton
            icon="add"
            id="add-comment"
            color="white"
            value="Add Comment"
            onClick={() => this.onAddCommentHandler()}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default PostCommentsList;
