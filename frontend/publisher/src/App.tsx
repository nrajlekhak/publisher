import React from 'react';
import ReactDOM from 'react-dom';
import Article from './components/Article';
import PageTitle from './components/PageTitle';

import './index.scss';
import Layout from './Layout';

const App = () => (
  <Layout>
    <PageTitle />
    <>
      {new Array(10).fill('').map(() => (
        <Article />
      ))}
    </>
  </Layout>
);
ReactDOM.render(<App />, document.getElementById('app'));
