import React from 'react';
import ColoredButton from '../ui/ColoredButton';

import LinkButton from '../ui/LinkButton';
import VoteCard from '../ui/VoteCard';
import IconButton from '../ui/IconButton';

const PostCardActions = ({ postId, deletePost, isDetailCard }) => (
  <React.Fragment>
    <div className="mdl-card__actions mdl-card--border">
      {isDetailCard ? (
        <ColoredButton icon="add" id="add-comment" value="Add Comment" />
      ) : (
        <LinkButton id="read-more" postId={postId} value="More" />
      )}
      <div className="mdl-layout-spacer" />
      <VoteCard />
    </div>
    <div className="mdl-card__menu">
      {isDetailCard && (
        <IconButton icon="edit" id="editPost" iconColor="grey-200" />
      )}
      <IconButton
        icon="delete"
        id="deletePost"
        iconColor="grey-200"
        onClick={() => deletePost(postId)}
      />
    </div>
  </React.Fragment>
);

export default PostCardActions;
