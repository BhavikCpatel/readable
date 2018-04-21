import React from 'react';
import VoteCard from '../ui/VoteCard';
import CommentActions from './CommentActions';
import CommentDetail from './CommentDetail';

const Comment = () => (
  <li className="mdl-list__item mdl-list__item--three-line comment-detail">
    <CommentDetail />
    <span className="mdl-list__item-secondary-content">
      <span className="vote-comment">
        <VoteCard />
      </span>
      <CommentActions />
    </span>
  </li>
);

export default Comment;