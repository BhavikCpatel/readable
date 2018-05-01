import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../ui/LinkButton';
import VoteCardContainer from '../containers/VoteCardContainer';
import IconButton from '../ui/IconButton';
import { CATEGORY } from '../../constants';

const PostCardActions = ({
  category,
  postId,
  voteScore,
  deletePost,
  isDetailCard,
}) => (
  <React.Fragment>
    <div className="mdl-card__actions mdl-card--border">
      {isDetailCard ? (
        <LinkButton
          icon="edit"
          id="editPost"
          path={`/post/edit/${postId}`}
          value=" Edit"
        />
      ) : (
        <LinkButton
          id="read-more"
          path={`/${category}/${postId}`}
          value="More"
        />
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

PostCardActions.propTypes = {
  category: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  deletePost: PropTypes.func.isRequired,
  isDetailCard: PropTypes.bool.isRequired,
};
export default PostCardActions;
