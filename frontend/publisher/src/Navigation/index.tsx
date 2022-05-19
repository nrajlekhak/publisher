import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from '../pages/ArticleDetails';
import Home from '../pages/Home';

import AdminArticles from 'admin/Articles';
import ArticlesCreate from 'admin/Articles/Create';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/article/:slug' element={<ArticleDetails />} />
      <Route path='/admin/articles/create' element={<ArticlesCreate />} />
      <Route path='/admin/articles' element={<AdminArticles />} />
    </Routes>
  );
};

export default index;
