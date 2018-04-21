import React from 'react';
import CommentForm from '../comment/CommentForm';
import PostCommentsContainer from '../containers/PostCommentsContainer';
import PostCard from './PostCard';

const PostDetail = props =>
  props.post && (
    <div className="post-card post-detail mdl-grid">
      <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
        <PostCard
          isDetailCard
          post={props.post}
          deletePost={props.deletePost}
        />
      </div>
      <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
        <CommentForm />
      </div>
      <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp post-comments-section">
        <PostCommentsContainer postId={props.post.id} />
      </div>
    </div>
  );

export default PostDetail;
