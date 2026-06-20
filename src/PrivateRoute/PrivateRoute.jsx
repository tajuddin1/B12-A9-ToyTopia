import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[90vh] flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    )
  }

  if (!user) {
    return (
      <Navigate to={`/login`} />
    )
  }

  return children;
};

export default PrivateRoute;