// Application Title
export const APP_TITLE = '[readable]';
export const HEADER_COLOR = 'blue-500';
// API Server URL
export const BASE_URL = 'http://localhost:3001';

/*
Note: Redux Action Type would be based on CATEGORY, METHOD and STATUS
Action.type format is "METHOD_CATEGORY_STATUS"
e.g. GET_POST_REQUEST, GET_POST_FAILED, ADD_POST_REQUEST etc.
*/
// Action Category: This is based on application features
export const CATEGORY = {
  POST_CATEGORY: 'POST_CATEGORY',
  POST: 'POST',
  COMMENT: 'COMMENT',
  UI: 'UI',
};

// Action Method: This is based on Operation
export const METHOD = {
  GET: 'GET',
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  VOTE: 'VOTE',
  ORDER: 'ORDER',
  FIND_BY_ID: 'FIND_BY_ID',
  SET_COMMENT_CNT: 'SET_COMMENT_CNT',
  NOTIFICATION: 'NOTIFICATION',
};
// Action status: action status
export const STATUS = {
  REQUEST: 'REQUEST',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};
