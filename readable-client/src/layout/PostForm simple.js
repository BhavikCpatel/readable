import React from 'react';
import ColoredButton from './ColoredButton';
import TextField from './TextField';
const PostForm = props => (
  <div className="post-form">
    <div className="post-form-container mdl-grid">
      <div className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title mdl-color--grey-600 mdl-typography--text-uppercase">
          <span className="post-form__title-text mdl-typography--subhead-color-contrast">
            Add a new Post
          </span>
        </div>

        <div className="mdl-card__supporting-text">
          <form action="#" className="post-form">
            <div id="category-field">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <select className="mdl-textfield__input" id="category">
                  <option value="" />
                  <option value="react">React</option>
                  <option value="redux">Redux</option>
                  <option value="udacity">Udacity</option>
                </select>
                <label className="mdl-textfield__label" for="category">
                  Post Category
                </label>
                <span className="mdl-textfield__error">
                  Please select category
                </span>
              </div>
            </div>
            <div id="name-field">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                  className="mdl-textfield__input"
                  type="text"
                  pattern=".+"
                  id="name"
                />
                <label className="mdl-textfield__label" for="name">
                  Your Name
                </label>
                <span className="mdl-textfield__error">
                  Your name is missing
                </span>
              </div>
            </div>
            <TextField
              id="title"
              pattern=".+"
              title="PostTitle2"
              large-field
              errorMessage="Post Title is Missing"
            />

            <div id="title-field">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label large-textfield">
                <input
                  className="mdl-textfield__input"
                  type="text"
                  pattern=".+"
                  id="title"
                />
                <label className="mdl-textfield__label" for="title">
                  Post Title
                </label>
                <span className="mdl-textfield__error">
                  Post title is missing
                </span>
              </div>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label large-textfield">
              <textarea
                className="mdl-textfield__input"
                type="text"
                rows="3"
                id="sample5"
              />
              <label className="mdl-textfield__label" for="sample5">
                Type your post contents here...
              </label>
            </div>

            <div className="mdl-card__actions mdl-typography--text-center">
              <ColoredButton icon="save" id="savePost" value=" Save" />
              <ColoredButton icon="clear" id="clearPost" value=" Clear" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default PostForm;
