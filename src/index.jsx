import React from 'react';
import { createRoot } from "react-dom/client";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store/store.js';
import './styles/index.css';

const root = createRoot(document.getElementById("root"));


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);