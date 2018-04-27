import {
  CATEGORY as ACTION_CATEGORY,
  METHOD as ACTION_METHOD,
  STATUS as ACTION_STATUS,
} from '../constants';

function processSortOrderAction(state, action) {
  return Object.assign({}, state, {
    postSortOrder: { orderBy: action.orderBy, orderType: action.orderType },
  });
}

function processUiNotificationAction(state, action) {
  switch (action.status) {
    case ACTION_STATUS.REQUEST:
      if (action.message) {
        return Object.assign({}, state, {
          notification: {
            message: action.message,
            type: action.messageType,
          },
        });
      }
      return state; /* else {
      return Object.assign({}, state, {
        notification:  undefined })
      
    } */
    /* case ACTION_STATUS.CLOSE:
      return Object.assign({}, state, {
        notification: null,
      }); */
    default:
      return state;
  }
}

const ui = (state = { orderBy: 'timestamp', orderType: 'desc' }, action) => {
  if (action.category !== ACTION_CATEGORY.UI) {
    return state;
  }

  switch (action.method) {
    case ACTION_METHOD.ORDER:
      return processSortOrderAction(state, action);
    case ACTION_METHOD.NOTIFICATION:
      return processUiNotificationAction(state, action);
    default:
      return state;
  }
};

export default ui;
