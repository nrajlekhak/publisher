import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

import './index.scss';
import Layout from './Layout';

const App = () => (
  <Layout>
    <Navigation />
  </Layout>
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
