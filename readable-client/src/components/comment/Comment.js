import React from 'react';
import VoteCardContainer from '../containers/VoteCardContainer';
import CommentActions from './CommentActions';
import CommentDetail from './CommentDetail';
import { CATEGORY } from '../../constants';

const Comment = ({ comment, deleteComment }) => (
  <li className="mdl-list__item mdl-list__item--three-line comment-detail">
    <CommentDetail comment={comment} />
    <span className="mdl-list__item-secondary-content">
      <span className="vote-comment">
        <VoteCardContainer
          voteCategory={CATEGORY.COMMENT}
          id={comment.id}
          voteScore={comment.voteScore}
        />
      </span>
      <CommentActions deleteComment={deleteComment} comment={comment} />
    </span>
  </li>
);

export default Comment;
