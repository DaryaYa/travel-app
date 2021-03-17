import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './i18next';

ReactDOM.render(
  <Suspense fallback={<div>Loading~~~</div>}> 
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

reportWebVitals();
