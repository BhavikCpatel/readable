import React from 'react';
import PostCommentsContainer from '../containers/PostCommentsContainer';
import PostCard from './PostCard';
import AddPostButton from './AddPostButton';
import ColoredButton from '../ui/ColoredButton';
import Loader from '../ui/Loader';

const PostDetail = ({ post, deletePost, history, isLoading, error }) => {
  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <div>Oops! something unexpected happened. Please try again!</div>;
  }

  return post ? (
    <React.Fragment>
      <div className="mdl-typography--display-1">Post Detail</div>
      <div className="post-card post-detail mdl-grid">
        <div className="mdl-cell mdl-cell--2-col">
          <ColoredButton
            icon="keyboard_arrow_left"
            color="pink-400"
            value=" Back"
            id="goback"
            onClick={() => history.goBack()}
          />
        </div>
        <div className="mdl-cell mdl-cell--2-col mdl-cell--4-offset-tablet mdl-cell--8-offset-desktop mdl-typography--text-right">
          <AddPostButton />
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
          <PostCard
            isDetailCard
            post={post}
            deletePost={deletePost}
            onCommentAdd={() => this.onCommentAdd()}
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp post-comments-section">
          <PostCommentsContainer postId={post.id} />
        </div>
      </div>
    </React.Fragment>
  ) : null;
};

export default PostDetail;
