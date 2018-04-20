import React from 'react';
import ColoredButton from './ColoredButton';
import VoteCard from './VoteCard';
import IconButton from './IconButton';

const PostCardActions = props => (
  <React.Fragment>
    <div className="mdl-card__actions mdl-card--border">
      {props.isDetailCard ? (
        <ColoredButton icon="add" id="add-comment" value="Add Comment" />
      ) : (
        <ColoredButton id="read-more" value="More" />
      )}
      <div className="mdl-layout-spacer" />
      <VoteCard />
    </div>
    <div className="mdl-card__menu">
      {props.isDetailCard && (
        <IconButton icon="edit" id="editPost" iconColor="grey-200" />
      )}
      <IconButton icon="delete" id="deletePost" iconColor="grey-200" />
    </div>
  </React.Fragment>
);

export default PostCardActions;
