import React from 'react';
import VoteCardContainer from '../containers/VoteCardContainer';
import CommentActions from './CommentActions';
import CommentDetail from './CommentDetail';
import EditComment from './EditComment';
import { CATEGORY } from '../../constants';

class Comment extends React.Component {
  state = {
    showEditForm: false,
  };
  onEditRequestHandler() {
    this.setState({ showEditForm: true });
  }
  render() {
    const { comment, deleteComment, editComment } = this.props;
    return (
      <li className="mdl-list__item mdl-list__item--three-line comment-detail">
        {this.state.showEditForm ? (
          <EditComment
            comment={comment}
            editComment={editComment}
            onCancel={() => this.setState({ showEditForm: false })}
            onSave={() => this.setState({ showEditForm: false })}
          />
        ) : (
          <CommentDetail comment={comment} />
        )}
        {!this.state.showEditForm && (
          <span className="mdl-list__item-secondary-content">
            <span className="vote-comment">
              <VoteCardContainer
                voteCategory={CATEGORY.COMMENT}
                id={comment.id}
                voteScore={comment.voteScore}
              />
            </span>

            <CommentActions
              deleteComment={deleteComment}
              onEditRequest={() => this.onEditRequestHandler()}
              comment={comment}
            />
          </span>
        )}
      </li>
    );
  }
}

export default Comment;
