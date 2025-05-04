import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem('token'); // Check if the token exists

  return token ? (
    <Element {...rest} /> // If authenticated, render the component
  ) : (
    <Navigate to="/login" /> // Otherwise, redirect to login
  );
};

export default ProtectedRoute;
