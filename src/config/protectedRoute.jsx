import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../config/authContext";

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
