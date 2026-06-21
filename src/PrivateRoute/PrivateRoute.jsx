import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[90vh] flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    )
  }

  if (!user) {
    return (
      <Navigate to={`/login`} state={ { from: location } } />
    )
  }

  return children;
};

export default PrivateRoute;