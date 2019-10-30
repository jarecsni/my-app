import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import { UiState } from './stores/UiState';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const stores = {
  uiState: new UiState()
};

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
