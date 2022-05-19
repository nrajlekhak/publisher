import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@pages/Login';
import ProtectedRoute, {
  ProtectedRouteProps,
} from '@navigation/ProtectedRoute';

import Create from '@pages/Article/Create';
import Edit from '@pages/Article/Edit';
import Article from '@pages/Article/Index';

const index = () => {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    authenticationPath: '/login',
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            outlet={<Article />}
          />
        }
      />
      <Route path='/articles/:id' element={<Article />} />
      <Route path='/articles/create' element={<Create />} />
      <Route path='/articles/:id/edit' element={<Edit />} />

      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default index;
