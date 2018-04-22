import React from 'react';

import CommentsList from '../comment/CommentsList';
import SectionHeader from '../ui/SectionHeader';

const PostCommentsList = props => (
  <React.Fragment>
    <SectionHeader
      color="grey-600"
      title={`Comments (${props.comments && props.comments.length})`}
    />
    <div className="mdl-card__supporting-text">
      <CommentsList
        deleteComment={props.deleteComment}
        comments={props.comments}
      />
    </div>
  </React.Fragment>
);

export default PostCommentsList;
