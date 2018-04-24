import React from 'react';
import { generateUniqueId } from '../../utils';
import SectionHeader from '../ui/SectionHeader';
import TextField from '../ui/TextField';
import TextArea from '../ui/TextArea';
import FormActionBar from '../ui/FormActionBar';
import SelectWithOptions from '../ui/SelectWithOptions';
import IconButton from '../ui/IconButton';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    const post = props.post;
    this.state = {
      id: post ? post.id : undefined,
      title: post ? post.title : '',
      author: post ? post.author : '',
      category: post ? post.category : '',
      body: post ? post.body : '',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.post && !prevProps.post) {
      this.setState(() => ({
        id: this.props.post.id,
        title: this.props.post.title,
        author: this.props.post.author,
        category: this.props.post.category,
        body: this.props.post.body,
      }));
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  validateFormData(post) {
    return true;
  }
  handleFormSubmit(event) {
    event.preventDefault();
    if (!this.validateFormData(this.state)) {
      // TOOD: Validation Handler
    }
    if (this.state.id) {
      this.props.editPost({
        id: this.state.id,
        title: this.state.title,
        body: this.state.body,
      });
    } else {
      this.props
        .addPost({
          id: generateUniqueId(),
          title: this.state.title,
          author: this.state.author,
          body: this.state.body,
          category: this.state.category,
          timestamp: Date.now(),
        })
        .then(() => {
          alert('saved');
          this.props.history.goBack();
        });
    }
    // TOOD: Go back to Posts List Page.
  }

  handleFormReset() {
    this.setState({
      title: '',
      author: '',
      body: '',
      category: '',
    });
  }

  render() {
    const { post } = this.props;

    const isEditMode = !!post;

    return (
      <div className="post-form">
        <div className="post-form-container mdl-grid">
          <div className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
            <SectionHeader
              color="grey-600"
              title={isEditMode ? 'Edit Post' : 'Add a new Post'}
            />

            <div className="mdl-card__supporting-text">
              <form
                id="post-form"
                onSubmit={e => this.handleFormSubmit(e)}
                className="post-form"
              >
                {isEditMode ? (
                  <div>
                    <p>Category: {this.state.category}</p>
                    <p>Author: {this.state.author}</p>
                  </div>
                ) : (
                  <React.Fragment>
                    <SelectWithOptions
                      id="category"
                      title="Post Category"
                      errorMessage="Please select a category"
                      options={this.props.categories}
                      value={this.state.category}
                      required="required"
                      onChange={e => this.handleInputChange(e)}
                    />

                    <TextField
                      id="author"
                      pattern="^[a-zA-Z\s]+$"
                      onChange={e => this.handleInputChange(e)}
                      title="Your Name"
                      required="required"
                      errorMessage="Your name is missing"
                    />
                  </React.Fragment>
                )}

                <TextField
                  id="title"
                  pattern=".+"
                  title="Post Title"
                  required="required"
                  value={this.state.title}
                  errorMessage="Post Title is Missing"
                  onChange={e => this.handleInputChange(e)}
                  largeField
                />
                <TextArea
                  id="body"
                  pattern="/.+/"
                  title="Type your post contents here..."
                  errorMessage="Please add post contents"
                  rows="3"
                  value={this.state.body}
                  onChange={e => this.handleInputChange(e)}
                  required="required"
                  largeField
                />
                <div className="mdl-card__actions mdl-typography--text-center">
                  <FormActionBar onClear={() => this.handleFormReset()} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
