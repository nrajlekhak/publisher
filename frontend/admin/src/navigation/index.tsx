import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute, {
  ProtectedRouteProps,
} from '@navigation/ProtectedRoute';

import Login from '@pages/Login';
import Create from '@pages/Article/Create';
import Edit from '@pages/Article/Edit';
import Article from '@pages/Article/Index';

// Components imported from Module Federation
import Home from 'publisher/Home';
import ArticleDetails from 'publisher/ArticleDetails';

import OAuthLogin from '@pages/Login/OAuthLogin';
import GuestRoute, { GuestRouteProps } from './GuestRoute';
import Details from '@pages/Article/Details';

const index = () => {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'children'> = {
    authenticationPath: '/login',
  };
  const defaultGuestRouteProps: Omit<GuestRouteProps, 'children'> = {
    guestPath: '/admin/articles',
  };

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/article/:slug' element={<ArticleDetails />} />

      <Route
        path='/admin'
        element={<ProtectedRoute {...defaultProtectedRouteProps} />}
      >
        <Route path='articles/create' element={<Create />} />
        <Route path='articles/:slug/edit' element={<Edit />} />
        <Route path='articles/:slug' element={<Details />} />
        <Route path='articles' element={<Article />} />
      </Route>

      <Route element={<GuestRoute {...defaultGuestRouteProps} />}>
        <Route path='/login' element={<Login />} />
        <Route path='/auth/github-callback' element={<OAuthLogin />} />
      </Route>
    </Routes>
  );
};

export default index;
