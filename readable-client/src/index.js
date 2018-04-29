import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

/* set initial state for app */
const initialState = {
  categories: { data: [], isError: false, isLoading: false },
  posts: { data: [], isError: false, isLoading: false },
  ui: {
    postSortOrder: { orderBy: 'timestamp', orderType: 'desc' },
    notification: null,
  },
};

/* create store */
const store = createStore(initialState);

/* Render app */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
