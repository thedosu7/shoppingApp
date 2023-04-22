import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CartStore } from './CartStore';

export default function AdminRoute({ children }) {
  const { state } = useContext(CartStore);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}
