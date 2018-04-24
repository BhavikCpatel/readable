import React from 'react';
import ColoredButton from '../ui/ColoredButton';
import CommentsList from '../comment/CommentsList';
import SectionHeader from '../ui/SectionHeader';
import CommentForm from './CommentForm';

class PostCommentsList extends React.Component {
  state = {
    showCommentForm: false,
  };
  onSaveHandler(comment) {
    // TODO: console.log('move save routing to this comp', comment);
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
      error,
    } = this.props;

    return (
      <React.Fragment>
        <SectionHeader
          color="grey-600"
          title={
            isLoading
              ? 'Loading Comments...'
              : `Comments (${comments && comments.length})`
          }
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

        {isLoading ? (
          <div className="mdl-spinner mdl-js-spinner is-active" />
        ) : (
          <div className="mdl-card__supporting-text">
            <CommentsList
              deleteComment={deleteComment}
              editComment={editComment}
              comments={comments}
            />
          </div>
        )}
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
