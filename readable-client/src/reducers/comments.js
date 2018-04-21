import {
  CATEGORY as ACTION_CATEGORY,
  METHOD as ACTION_METHOD,
  STATUS as ACTION_STATUS,
} from '../constants';

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

const comments = (state = {}, action) => {
  if (action.category !== ACTION_CATEGORY.COMMENT) {
    return state;
  } else if (action.method === ACTION_METHOD.VOTE) {
    return processPostVoteAction(state, action);
  } else if (action.method === ACTION_METHOD.GET) {
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
  } else if (action.method === ACTION_METHOD.DELETE) {
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

      default:
        // TODO: handle Failed and Request action
        return state;
    }
  } else if (action.method === ACTION_METHOD.EDIT) {
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

      default:
        // TODO: handle Failed and Request action
        return state;
    }
  } else if (action.method === ACTION_METHOD.ADD) {
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

      default:
        // TODO: handle Failed and Request action
        return state;
    }
  }
  return state;
};
export default comments;
