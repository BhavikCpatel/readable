import React from 'react';

const CommentCounter = props => (
  <section className="comment-section">
    <span>
      <span className="mdl-typography--caption-color-contrast post-comment-cnt">
        Comments:{' '}
      </span>
      <i
        className="material-icons mdl-color-text--primary mdl-badge"
        data-badge="20"
      >
        comment
      </i>
    </span>
  </section>
);

export default CommentCounter;
