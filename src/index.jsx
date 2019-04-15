/* eslint-disable import/no-duplicates */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/style.css';
import './css/media.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './Components/serviceWorker';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/style.css';
import './css/media.css';
import store from './redux/ReduxStore';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);

serviceWorker.unregister();
