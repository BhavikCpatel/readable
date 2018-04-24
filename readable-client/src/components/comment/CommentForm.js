import React from 'react';

import { generateUniqueId } from '../../utils';
import SectionHeader from '../ui/SectionHeader';
import TextField from '../ui/TextField';
import TextArea from '../ui/TextArea';
import FormActionBar from '../ui/FormActionBar';
import IconButton from '../ui/IconButton';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.postId,
      commentBody: undefined,
      mode: 'add',
      author: '',
    };
  }

  openCommentForm(mode, postId, comment) {
    this.setState(() => ({
      mode,
      postId,
      commentId: mode === 'add' ? '' : comment.id,
      commentBody: mode === 'add' ? '' : comment.body,
      author: mode === 'add' ? '' : comment.author,
    }));
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateInput(commentBody, authorName) {
    // TODO: implement form validation here
    return true;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateInput(this.state.commentBody, this.state.author)) {
      // submit response
      // USAGE:  Edit the details of an existing comment
      // PARAMS: timestamp: timestamp.
      //        body: String

      if (this.state.mode === 'edit') {
        // edit comment
        this.props.editComment({
          id: this.state.commentId,
          body: this.state.commentBody,
          timestamp: Date.now(),
        });
      } else {
        // add comment
        this.props
          .addComment({
            id: generateUniqueId(),
            body: this.state.commentBody,
            author: this.state.author,
            parentId: this.state.postId,
            timestamp: Date.now(),
          })
          .then(() => {
            alert('saved');
            this.props.onSave(this.state);
          });
      }
    }
  }
  resetCommentForm() {
    this.setState({
      author: this.state.mode === 'edit' ? this.state.postComment.author : '',
      commentBody:
        this.state.mode === 'edit' ? this.state.postComment.body : '',
    });
  }
  handleAddNewComment() {
    this.openCommentForm('add', this.props.postId);
  }
  handleEditComment(comment) {
    this.openCommentForm('edit', comment.parentId, comment);
  }
  render() {
    const { onClose, addComment } = this.props;
    return (
      <div className="comment-form mdl-grid">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
          <form id="comment-form" onSubmit={e => this.handleFormSubmit(e)}>
            <TextField
              id="author"
              required
              value={this.state.author}
              pattern="^[a-zA-Z\s]+$"
              title="Your Name"
              fieldCaption="Author:"
              disabled={this.state.mode === 'edit'}
              onChange={e => this.handleInputChange(e)}
              errorMessage="Your name is missing"
            />

            <TextArea
              id="commentBody"
              title="Type your comment here..."
              pattern="/.+/"
              required
              errorMessage="Please add your comment here"
              rows="3"
              value={this.state.commentBody}
              fieldCaption="Your Comments:"
              onChange={e => this.handleInputChange(e)}
              largeField
            />

            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col mdl-typography--text-right">
                <FormActionBar onClear={() => this.resetCommentForm()} />
              </div>
            </div>
            <div className="mdl-card__menu">
              <IconButton
                icon="close"
                id="closeForm"
                iconColor="primary"
                onClick={onClose}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
