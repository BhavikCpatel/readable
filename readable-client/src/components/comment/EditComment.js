import React from 'react';
import FormActionBar from '../ui/FormActionBar';
import TextArea from '../ui/TextArea';

class EditComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.comment.parentId,
      commentBody: props.comment.body,
      commentId: props.comment.id,
    };
  }

  handleInputChange(event) {
    this.setState({ commentBody: event.target.value });
  }

  validateInput(commentBody) {
    // TODO: implement form validation here
    return true;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateInput(this.state.commentBody)) {
      // submit response
      // USAGE:  Edit the details of an existing comment
      // PARAMS: timestamp: timestamp.
      //        body: String

      this.props
        .editComment({
          id: this.state.commentId,
          body: this.state.commentBody,
          timestamp: Date.now(),
        })
        .then(() => {
          alert('saved');
          this.props.onSave(this.state);
        });
    }
  }

  resetCommentForm() {
    this.setState({
      commentBody: this.props.comment.body,
    });
  }

  render() {
    return (
      <span className="mdl-list__item-primary-content">
        <span>{this.props.comment.author}</span>

        <span className="mdl-list__item-text-body">
          <form id="editcomment-form" onSubmit={e => this.handleFormSubmit(e)}>
            <TextArea
              id="commentBody"
              title={this.props.comment.body}
              pattern="/.+/"
              required
              errorMessage="Please add comment"
              rows="3"
              value={this.state.commentBody}
              onChange={e => this.handleInputChange(e)}
              largeField
            />
            <FormActionBar
              onClear={() => this.resetCommentForm()}
              onCancel={this.props.onCancel}
            />
          </form>
        </span>
      </span>
    );
  }
}

export default EditComment;
