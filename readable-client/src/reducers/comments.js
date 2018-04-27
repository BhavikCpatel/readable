import {
  CATEGORY as ACTION_CATEGORY,
  METHOD as ACTION_METHOD,
  STATUS as ACTION_STATUS,
} from '../constants';

const comments = (state = {}, action) => {
  if (action.category !== ACTION_CATEGORY.COMMENT) {
    return state;
  }

  switch (action.method) {
    case ACTION_METHOD.VOTE:
      return processPostVoteAction(state, action);
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

function updateVoteScore(data, updatedObj) {
  return data.map(
    obj =>
      obj.id === updatedObj.id
        ? Object.assign({}, obj, { voteScore: updatedObj.voteScore })
        : obj,
  );
}

function processPostVoteAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.SUCCEEDED:
      if (action.payload.id) {
        // update votescore
        return Object.assign({}, state, {
          data: Object.assign({}, state.data, {
            [action.payload.parentId]: updateVoteScore(
              state.data[action.payload.parentId],
              action.payload,
            ),
          }),
        });
      }
      return state;
    case ACTION_STATUS.FAILED:
      // Will handle this failed action in error notification reducer
      // TODO: handle failed action { what to do? }
      return state;
    default:
      return state;
  }
}

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
