import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";

const index = () => {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticationPath: "/login",
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Dashboard />}
            />
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default index;
