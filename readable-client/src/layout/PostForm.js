import React from 'react';
import TextField from './TextField';
import TextArea from './TextArea';
import SelectWithOptions from './SelectWithOptions';
import FormActionBar from './FormActionBar';
import SectionHeader from './SectionHeader';

const PostForm = props => (
  <div className="post-form">
    <div className="post-form-container mdl-grid">
      <div className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
        <SectionHeader color="grey-600" title="Add a new Post" />

        <div className="mdl-card__supporting-text">
          <form action="#" className="post-form">
            <SelectWithOptions
              id="category"
              title="Post Category"
              errorMessage="Please select a category"
            />

            <TextField
              id="name"
              pattern=".+"
              title="Your Name 2"
              errorMessage="Your name is missing"
            />
            <TextField
              id="title"
              pattern=".+"
              title="PostTitle2"
              largeField
              errorMessage="Post Title is Missing"
            />
            <TextArea
              id="content"
              title="Type your post contents here..."
              value="Text"
              errorMessage="Please add post content"
              rows="3"
              largeField
            />
            <div className="mdl-card__actions mdl-typography--text-center">
              <FormActionBar />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default PostForm;
