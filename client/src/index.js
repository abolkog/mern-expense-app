import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { onLodingSignIn } from './actions/auth_actions';

store.dispatch(onLodingSignIn());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
