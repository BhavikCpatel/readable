import React from 'react';
import PropTypes from 'prop-types';
import { commentPropTypes } from '../../utils/propTypesDefs';
import FormActionBar from '../ui/FormActionBar';
import TextArea from '../ui/TextArea';

class EditComment extends React.Component {
  static propTypes = {
    comment: commentPropTypes,
    onSave: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };
  static defaultProps = {
    comment: null,
  };

  static validateInput(commentBody) {
    // TODO: implement form validation here
    if (!commentBody || commentBody === '') {
      return false;
    }
    return true;
  }
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

  handleFormSubmit(event) {
    event.preventDefault();
    if (EditComment.validateInput(this.state.commentBody)) {
      this.props
        .editComment({
          id: this.state.commentId,
          body: this.state.commentBody,
          timestamp: Date.now(),
        })
        .then(() => {
          // Handle Response here alert('saved');
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
      <form id="editcomment-form" onSubmit={e => this.handleFormSubmit(e)}>
        <TextArea
          id="commentBody"
          title={this.props.comment.body}
          pattern="/.+/"
          required
          errorMessage="Please add comment"
          rows="3"
          fieldCaption="Comment:"
          value={this.state.commentBody}
          onChange={e => this.handleInputChange(e)}
          largeField
        />
        <FormActionBar
          onClear={() => this.resetCommentForm()}
          onCancel={this.props.onCancel}
        />
      </form>
    );
  }
}

export default EditComment;
