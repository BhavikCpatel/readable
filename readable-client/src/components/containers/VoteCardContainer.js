import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerVote } from '../../actions/async/generalAsyncActions';
import VoteCard from '../ui/VoteCard';
import { CATEGORY } from '../../constants';

const VoteCardContainer = props => (
  <VoteCard
    voteCategory={props.voteCategory}
    id={props.id}
    voteScore={props.voteScore}
    registerVote={props.registerVote}
  />
);

VoteCardContainer.propTypes = {
  voteCategory: PropTypes.oneOf([CATEGORY.POST, CATEGORY.COMMENT]).isRequired,
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  registerVote: PropTypes.func.isRequired,
};

const mapDispatchToProps = { registerVote };

export default connect(null, mapDispatchToProps)(VoteCardContainer);
