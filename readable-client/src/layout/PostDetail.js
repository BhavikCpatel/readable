import React from 'react';
import CommentForm from './CommentForm';
import PostCommentsList from './PostCommentsList';
import PostCard from './PostCard';

const PostDetail = props => (
  <div className="post-card post-detail mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
      <PostCard isDetailCard />
    </div>
    <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
      <CommentForm />
    </div>
    <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp post-comments-section">
      <PostCommentsList />
    </div>
  </div>
);

export default PostDetail;
