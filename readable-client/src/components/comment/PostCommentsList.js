import React from 'react';
import ColoredButton from '../ui/ColoredButton';
import CommentsList from '../comment/CommentsList';
import SectionHeader from '../ui/SectionHeader';
import CommentForm from './CommentForm';
import Loader from '../ui/Loader';

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
    } = this.props;

    return (
      <React.Fragment>
        <SectionHeader
          color="grey-600"
          title={`Comments (${
            isLoading ? ' Loading... ' : comments ? comments.length : 0
          })`}
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
