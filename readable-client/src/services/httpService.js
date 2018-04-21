import { getFullURL } from '../utils';
/**
 * @function httpRequest
 * @description handles http calls
 * @param {string} url  - backend server api's url
 * @param {*} options : http request options
 * @returns promise
 * @export
 * @author Bhavik Patel
 */
export function httpRequest(url, options) {
  const defaultHeaders = {
    Authorization: 'myauthtoken',
    'content-type': 'application/json',
  };
  const reqOptions = options
    ? Object.assign({}, options, {
        headers: Object.assign({}, options.headers, defaultHeaders),
      })
    : { method: 'GET', headers: defaultHeaders };
  return fetch(url, reqOptions)
    .then(res => {
      if (!res.ok) {
        throw Error(`${res.statusText}(${res.status})`);
      }
      return res.json();
    })
    .catch(err => Promise.reject(err));
}

export function processHttpRequest(
  path,
  successActionCreator,
  rejectActionCreator,
  option,
) {
  return httpRequest(getFullURL(path), option)
    .then(payload => successActionCreator({ payload }))
    .catch(error => rejectActionCreator({ error: error.message }));
}
