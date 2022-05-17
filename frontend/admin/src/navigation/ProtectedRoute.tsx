import React from 'react'
import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

 const  ProtectedRoute = ({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) => {

    const isAuthenticated = localStorage.getItem("isAuthenticated");


  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}

export default ProtectedRoute;
