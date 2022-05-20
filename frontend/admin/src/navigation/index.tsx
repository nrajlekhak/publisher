import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute, {
  ProtectedRouteProps,
} from '@navigation/ProtectedRoute';

import Login from '@pages/Login';
import Create from '@pages/Article/Create';
import Edit from '@pages/Article/Edit';
import Article from '@pages/Article/Index';

import Home from 'publisher/Home';
import ArticleDetails from 'publisher/ArticleDetails';
import OAuthLogin from '@pages/Login/OAuthLogin';

const index = () => {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'children'> = {
    authenticationPath: '/login',
  };

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/article/:slug' element={<ArticleDetails />} />
      {/* <Route
        path='/admin'
        element={
          <ProtectedRoute {...defaultProtectedRouteProps}>
            <Route path='/articles' element={<Article />} />
          </ProtectedRoute>
        }
      /> */}
      <Route
        path='/admin'
        element={<ProtectedRoute {...defaultProtectedRouteProps} />}
      >
        <Route path='articles/create' element={<Create />} />
        <Route path='articles/:id/edit' element={<Edit />} />
        <Route path='articles' element={<Article />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/auth/github-callback' element={<OAuthLogin />} />
    </Routes>
  );
};

export default index;
