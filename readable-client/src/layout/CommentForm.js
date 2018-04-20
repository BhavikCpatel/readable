import React from 'react';
import TextField from './TextField';
import TextArea from './TextArea';
import FormActionBar from './FormActionBar';

const CommentForm = props => (
  <div className="overlay">
    <form action="#">
      <span>Post your comment</span>
      <div className="mdl-dialog__content">
        <TextField
          id="name"
          pattern=".+"
          title="Your Name 2"
          errorMessage="Your name is missing"
        />
        <TextArea
          id="content"
          title="Type your post contents here..."
          value="Text"
          errorMessage="Please add post content"
          rows="3"
          largeField
        />
      </div>
      <div className="mdl-dialog__actions">
        <FormActionBar />
      </div>
    </form>
  </div>
);

export default CommentForm;
