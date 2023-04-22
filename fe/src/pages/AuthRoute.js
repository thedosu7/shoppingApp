import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CartStore } from './CartStore';

export default function ProtectedRoute({ children }) {
  const { state } = useContext(CartStore);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/signin" />;
}
