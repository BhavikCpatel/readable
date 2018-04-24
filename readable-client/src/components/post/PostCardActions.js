import React from 'react';
import ColoredButton from '../ui/ColoredButton';

import LinkButton from '../ui/LinkButton';
import VoteCardContainer from '../containers/VoteCardContainer';
import IconButton from '../ui/IconButton';
import { CATEGORY } from '../../constants';

const PostCardActions = ({ postId, voteScore, deletePost, isDetailCard }) => (
  <React.Fragment>
    <div className="mdl-card__actions mdl-card--border">
      {isDetailCard ? (
        <LinkButton
          icon="edit"
          id="editPost"
          postId={`edit/${postId}`}
          value=" Edit"
        />
      ) : (
        <LinkButton id="read-more" postId={postId} value="More" />
      )}
      <div className="mdl-layout-spacer" />
      <VoteCardContainer
        voteCategory={CATEGORY.POST}
        id={postId}
        voteScore={voteScore}
      />
    </div>
    <div className="mdl-card__menu">
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
