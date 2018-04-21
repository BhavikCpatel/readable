import React from 'react';
import IconButton from './IconButton';

const VoteCard = props => (
  <React.Fragment>
    <IconButton id="vote-up" icon="thumb_up" iconColor="green-500" />
    <span id="vote" className="vote mdl-badge" data-badge="+4" />
    <IconButton id="vote-down" icon="thumb_down" iconColor="red-500" />
  </React.Fragment>
);

export default VoteCard;
