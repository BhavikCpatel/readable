import React from 'react';
import { generateUniqueId } from '../../utils';
import SectionHeader from '../ui/SectionHeader';
import TextField from '../ui/TextField';
import TextArea from '../ui/TextArea';
import FormActionBar from '../ui/FormActionBar';
import SelectWithOptions from '../ui/SelectWithOptions';
import ColoredButton from '../ui/ColoredButton';

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
      this.props
        .editPost({
          id: this.state.id,
          title: this.state.title,
          body: this.state.body,
        })
        .then(() => {
          alert('updated');
          this.props.history.goBack();
        });
    } else {
      const id = generateUniqueId();
      this.props
        .addPost({
          id,
          title: this.state.title,
          author: this.state.author,
          body: this.state.body,
          category: this.state.category,
          timestamp: Date.now(),
        })
        .then(() => {
          alert('saved');
          this.props.history.push(`/post/${id}`);
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
    const { post, history } = this.props;

    const isEditMode = !!post;

    return (
      <div className="post-form">
        <div className="post-form-container mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <ColoredButton
              icon="keyboard_arrow_left"
              color="pink-400"
              value=" Back"
              id="goback"
              onClick={() => history.goBack()}
            />
          </div>
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
                    <p>
                      <span className="mdl-color-text--primary mdl-typography--caption">
                        Category:{' '}
                      </span>
                      <span className="mdl-typography--subhead">
                        {this.state.category}
                      </span>
                    </p>
                    <p>
                      <span className="mdl-color-text--primary mdl-typography--caption">
                        Author:{' '}
                      </span>
                      <span className="mdl-typography--subhead">
                        {this.state.author}
                      </span>
                    </p>
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
                      fieldCaption="Category:"
                      onChange={e => this.handleInputChange(e)}
                    />

                    <TextField
                      id="author"
                      pattern="^[a-zA-Z\s]+$"
                      onChange={e => this.handleInputChange(e)}
                      title="Your Name"
                      required="required"
                      value={this.state.author}
                      fieldCaption="Your Name:"
                      errorMessage="Your name is missing"
                    />
                  </React.Fragment>
                )}

                <TextField
                  id="title"
                  pattern=".+"
                  title="Post Title"
                  required="required"
                  errorMessage="Post Title is Missing"
                  value={this.state.title}
                  fieldCaption="Post Title:"
                  onChange={e => this.handleInputChange(e)}
                  largeField
                />
                <TextArea
                  id="body"
                  pattern="/.+/"
                  title="Type your post contents here..."
                  errorMessage="Please add post contents"
                  rows="3"
                  onChange={e => this.handleInputChange(e)}
                  required="required"
                  fieldCaption="Post Contents:"
                  value={this.state.body}
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
