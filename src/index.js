import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Root from 'core/Root';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from 'core/store/store';
import custom from "./THE_BLOG/THE_BLOG_Components"
import './THE_BLOG/THE_BLOG_Font.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Root custom={custom} />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


