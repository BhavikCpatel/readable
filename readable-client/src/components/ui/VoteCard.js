import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { CATEGORY } from '../../constants';

const VoteCard = ({ voteCategory, id, voteScore, registerVote }) => (
  <React.Fragment>
    <IconButton
      id="vote-up"
      icon="thumb_up"
      iconColor="green-500"
      onClick={() => registerVote({ voteCategory, id, key: 'upVote' })}
    />
    <span id="vote" className="vote mdl-badge" data-badge={voteScore} />
    <IconButton
      id="vote-down"
      icon="thumb_down"
      iconColor="red-500"
      onClick={() => registerVote({ voteCategory, id, key: 'downVote' })}
    />
  </React.Fragment>
);

VoteCard.propTypes = {
  voteCategory: PropTypes.oneOf([CATEGORY.POST, CATEGORY.COMMENT]).isRequired,
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  registerVote: PropTypes.func.isRequired,
};

export default VoteCard;
