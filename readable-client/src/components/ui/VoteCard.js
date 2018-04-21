import React from 'react';
import IconButton from './IconButton';

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

export default VoteCard;
