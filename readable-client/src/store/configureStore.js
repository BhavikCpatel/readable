import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import createUiNotifier from '../services/notificationMiddleware';
import { notifyUser } from '../actions/uiActions';

const uiNotificationMiddleware = createUiNotifier(notifyUser);

const configureStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, uiNotificationMiddleware, createLogger()),
    ),
  );

  return store;
};
export default configureStore;
