import { v4 } from 'uuid';
import { BASE_URL } from '../constants';

/**
 * @function: getFullURL
 * @description convert relative path to full url for
 * backend service api call
 * @param {string} path - a relative path for backend api
 * @returns {string} full url for backend api
 * @export
 * @author Bhavik Patel
 */
export function getFullURL(path) {
  return `${BASE_URL}${path}`;
}

/**
 * @function: generateUniqueId
 * @description generate untique Id for primary key
 * @returns {string} returns unique id
 * @export
 * @author Bhavik Patel
 */
export function generateUniqueId() {
  return v4();
}
/**
 * @function: createAction
 * @description: action creator curried function
 * [Note: Action type will be generated automatically using getter method]
 * [I've implemented this concept to reduce CONSTANTS and helps to generalize logic]
 * @param {string} category : category of action e.g. POST , COMMENT, POST_CATEGORY
 * @param {string} method : method of action e.g. ADD / EDIT/ DELETE/ GET etc
 * @param {string} status : action status: e.g. REQUEST, SUCCEEDED, FAILED
 * @returns: return function that accepts a payload for action
 * @export
 * @author Bhavik Patel
 */
export function createAction(category, method, status) {
  return payload =>
    Object.assign(
      {},
      {
        category,
        method,
        status,
        get type() {
          return `${this.method}_${this.category}_${this.status}`;
        },
      },
      payload,
    );
}

/**
 * @function: getActionType
 * @description: get action type based on action {category, method, status}
 * [Note: I haven't used this to get Action Type but I'm keeping this
 * function in case if anyone needs to get Action.Type for special purpose]
 * @param {string} category : category of action e.g. POST , COMMENT, POST_CATEGORY
 * @param {string} method : method of action e.g. ADD / EDIT/ DELETE/ GET etc
 * @param {string} status : action status: e.g. REQUEST, SUCCEEDED, FAILED
 * @returns: returns type of action e.g. GET_POST_REQUEST
 * @export
 * @author Bhavik Patel
 */
export function getActionType(category, method, status) {
  return `${method}_${category}_${status}`;
}

export const sortOrderMap = new Map();
sortOrderMap.set('voteScore-desc', 'Most Voted');

sortOrderMap.set('voteScore-asc', 'Least Voted');
sortOrderMap.set('timestamp-desc', 'Latest Post First');
sortOrderMap.set('timestamp-asc', 'Oldest Post First');
sortOrderMap.set('commentCount-desc', 'Most Commented');
sortOrderMap.set('commentCount-asc', 'Least Commented');
