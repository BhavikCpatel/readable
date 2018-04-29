import {
  CATEGORY as ACTION_CATEGORY,
  METHOD as ACTION_METHOD,
  STATUS as ACTION_STATUS,
} from '../constants';
import processVoteActionByCategory from './vote';
/* Comments Reducer */
const comments = (state = {}, action) => {
  if (action.category !== ACTION_CATEGORY.COMMENT) {
    return state;
  }
  /* Process Action using Action.method */
  switch (action.method) {
    case ACTION_METHOD.VOTE:
      return processVoteActionByCategory(
        ACTION_CATEGORY.COMMENT,
        state,
        action,
      );
    case ACTION_METHOD.GET:
      return processGetCommentsAction(state, action);
    case ACTION_METHOD.DELETE:
      return processDeleteCommentAction(state, action);
    case ACTION_METHOD.EDIT:
      return processEditCommentAction(state, action);
    case ACTION_METHOD.ADD:
      return processAddCommentAction(state, action);
    default:
      return state;
  }
};

function processGetCommentsAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.REQUEST:
      return Object.assign({}, state, { isLoading: true });
    case ACTION_STATUS.SUCCEEDED:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          [action.postId]: action.payload,
        }),
        error: null,
        isLoading: false,
      });
    case ACTION_STATUS.FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        data: Object.assign({}, state.data, { [action.postId]: [] }),
        error: action.error,
      });
    default:
      return state;
  }
}

function processDeleteCommentAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.SUCCEEDED:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          [action.payload.parentId]: [
            ...state.data[action.payload.parentId].filter(
              data => data.id !== action.payload.id,
            ),
          ],
        }),
      });
    // TODO: Handle Request and failed action here in case
    // we need to show some UI Indicators
    default:
      return state;
  }
}

function processEditCommentAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.SUCCEEDED:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          [action.payload.parentId]: [
            action.payload,
            ...state.data[action.payload.parentId].filter(
              data => data.id !== action.payload.id,
            ),
          ],
        }),
      });
    // TODO: handle Failed and Request action
    // to show on UI
    default:
      return state;
  }
}

function processAddCommentAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.SUCCEEDED:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          [action.payload.parentId]: [
            action.payload,
            ...state.data[action.payload.parentId],
          ],
        }),
      });
    // TODO: handle Failed and Request action
    // on UI
    default:
      return state;
  }
}

export default comments;
