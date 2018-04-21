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
  // if (category !== action.voteCategory) return state;
  switch (action.status) {
    case ACTION_STATUS.SUCCEEDED:
      if (action.payload.id) {
        // update votescore
        return Object.assign({}, state, {
          data: updateVoteScore(state.data, action.payload),
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

const posts = (state = {}, action) => {
  if (action.category !== ACTION_CATEGORY.POST) {
    return state;
  } else if (action.method === ACTION_METHOD.VOTE) {
    return processPostVoteAction(state, action);
  } else if (action.method === ACTION_METHOD.SET_COMMENT_CNT) {
    return Object.assign({}, state, {
      data: state.data.map(
        post =>
          post.id === action.postId
            ? { ...post, commentCount: post.commentCount + action.value }
            : post,
      ),
    });
  } else if (action.method === ACTION_METHOD.DELETE) {
    switch (action.status) {
      case ACTION_STATUS.SUCCEEDED:
        return Object.assign({}, state, {
          data: state.data.filter(data => data.id !== action.payload.id),
        });

      default:
        // TODO: handle Failed and Request action
        return state;
    }
  } else if (action.method === ACTION_METHOD.FIND_BY_ID) {
    switch (action.status) {
      case ACTION_STATUS.REQUEST:
        // Update Loading Status
        return Object.assign({}, state, { isLoading: true });
      case ACTION_STATUS.SUCCEEDED:
        return Object.assign({}, state, {
          data: [
            action.payload,
            ...state.data.filter(post => post.id !== action.payload.id),
          ],

          postCategory: action.payload.category,
          error: null,
          isLoading: false,
        });
      case ACTION_STATUS.FAILED:
        return Object.assign({}, state, {
          isLoading: false,
          data: [],
          postCategory: action.postCategory,
          error: action.error,
        });
      default:
        return state;
    }
  } else if (action.method === ACTION_METHOD.EDIT) {
    switch (action.status) {
      case ACTION_STATUS.REQUEST:
        // Update Loading Status
        return Object.assign({}, state, {
          isLoading: true,
          postId: action.post.id,
        });
      case ACTION_STATUS.SUCCEEDED:
        return Object.assign({}, state, {
          data: [
            ...state.data.filter(post => post.id !== action.payload.id),
            action.payload,
          ],
          error: null,
          isLoading: false,
        });
      case ACTION_STATUS.FAILED:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error,
        });
      default:
        return state;
    }
  } else if (action.method === ACTION_METHOD.GET) {
    switch (action.status) {
      case ACTION_STATUS.REQUEST:
        // Update Loading Status
        return Object.assign({}, state, {
          isLoading: true,
          postCategory: action.postCategory,
        });
      case ACTION_STATUS.SUCCEEDED:
        return Object.assign({}, state, {
          data: action.payload,
          postCategory: action.postCategory,
          error: null,
          isLoading: false,
        });
      case ACTION_STATUS.FAILED:
        return Object.assign({}, state, {
          isLoading: false,
          data: [],
          postCategory: action.postCategory,
          error: action.error,
        });
      default:
        return state;
    }
  }
  return state;
};

export default posts;
