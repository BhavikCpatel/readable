import React from 'react';
import IconButton from './IconButton';

const VoteCard = ({ voteCategory, id, voteScore }) => (
  <React.Fragment>
    <IconButton id="vote-up" icon="thumb_up" iconColor="green-500" />
    <span id="vote" className="vote mdl-badge" data-badge={voteScore} />
    <IconButton id="vote-down" icon="thumb_down" iconColor="red-500" />
  </React.Fragment>
);

export default VoteCard;
