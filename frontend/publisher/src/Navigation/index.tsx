import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ArticleDetails from '@pages/ArticleDetails';
import Home from '@pages/Home';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/article/:slug' element={<ArticleDetails />} />
    </Routes>
  );
};

export default index;
