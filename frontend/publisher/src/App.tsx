import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'admin/store';

import Navigation from './Navigation';

import Layout from './Layout';
import './index.scss';

const App = () => (
  <Provider store={store}>
    <Layout>
      <Navigation />
    </Layout>
  </Provider>
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
