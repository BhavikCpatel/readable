import React from 'react';

import CommentsList from './CommentsList';
import SectionHeader from './SectionHeader';
const PostCommentsList = props => (
  <React.Fragment>
    <SectionHeader color="grey-600" title="Comments (30)" />
    <div className="mdl-card__supporting-text">
      <CommentsList />
    </div>
  </React.Fragment>
);

export default PostCommentsList;
