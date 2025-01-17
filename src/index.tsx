import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
