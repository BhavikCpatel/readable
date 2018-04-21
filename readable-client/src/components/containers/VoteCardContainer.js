import React from 'react';
import { connect } from 'react-redux';
import { registerVote } from '../../actions/async/generalAsyncActions';
import VoteCard from '../ui/VoteCard';

const VoteCardContainer = ({ voteCategory, id, voteScore, registerVote }) => (
  <VoteCard
    voteCategory={voteCategory}
    id={id}
    voteScore={voteScore}
    registerVote={registerVote}
  />
);

const mapDispatchToProps = { registerVote };

export default connect(null, mapDispatchToProps)(VoteCardContainer);
