import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './containers/app';
import { store } from './services/store';
import './themes/fonts.css';
import GlobalStyle from './themes/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
        <GlobalStyle />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
