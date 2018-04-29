import {
  CATEGORY as ACTION_CATEGORY,
  METHOD as ACTION_METHOD,
  STATUS as ACTION_STATUS,
} from '../constants';
import processVoteActionByCategory from './vote';

/* Post Reducer */
const posts = (state = {}, action) => {
  if (action.category !== ACTION_CATEGORY.POST) {
    return state;
  }

  switch (action.method) {
    case ACTION_METHOD.VOTE:
      return processVoteActionByCategory(ACTION_CATEGORY.POST, state, action);
    case ACTION_METHOD.SET_COMMENT_CNT:
      return processSetCommentCountAction(state, action);
    case ACTION_METHOD.DELETE:
      return processDeletePostAction(state, action);
    case ACTION_METHOD.FIND_BY_ID:
      return processFindPostByIdAction(state, action);
    case ACTION_METHOD.EDIT:
      return processEditPostAction(state, action);
    case ACTION_METHOD.GET:
      return processGetPostsAction(state, action);
    case ACTION_METHOD.ADD:
      return processAddPostAction(state, action);
    default:
      return state;
  }
};

function processGetPostsAction(state, action) {
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

function processFindPostByIdAction(state, action) {
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
}

function processEditPostAction(state, action) {
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
}

function processDeletePostAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.SUCCEEDED:
      return Object.assign({}, state, {
        data: state.data.filter(data => data.id !== action.payload.id),
      });

    default:
      // TODO: handle Failed and Request action
      return state;
  }
}

function processAddPostAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.REQUEST:
      // Update Loading Status
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ACTION_STATUS.SUCCEEDED:
      return Object.assign({}, state, {
        data: [...state.data, action.payload],
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
}

function processSetCommentCountAction(state, action) {
  return Object.assign({}, state, {
    data: state.data.map(
      post =>
        post.id === action.postId
          ? { ...post, commentCount: post.commentCount + action.value }
          : post,
    ),
  });
}

export default posts;
