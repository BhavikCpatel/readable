import React from 'react';
import PropTypes from 'prop-types';

const CommentCounter = props => (
  <section className="comment-section">
    <span>
      <span className="mdl-typography--caption-color-contrast post-comment-cnt">
        Comments:{' '}
      </span>
      <i
        className="material-icons mdl-color-text--primary mdl-badge"
        data-badge={props.comments}
      >
        comment
      </i>
    </span>
  </section>
);

CommentCounter.propTypes = {
  comments: PropTypes.number.isRequired,
};

export default CommentCounter;
