import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navigation from './navigation';

// Module Federation Imports
import Layout from 'publisher/Layout';

import './index.scss';

// import Table from './components/Table';

const App = () => (
  <Provider store={store}>
    <Layout>
      <Navigation />
    </Layout>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
