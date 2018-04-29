import {
  CATEGORY as ACTION_CATEGORY,
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

export default function processVoteActionByCategory(category, state, action) {
  switch (action.status) {
    case ACTION_STATUS.SUCCEEDED:
      if (action.payload.id) {
        // update votescore

        if (category === ACTION_CATEGORY.POST) {
          return Object.assign({}, state, {
            data: updateVoteScore(state.data, action.payload),
          });
        }
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
