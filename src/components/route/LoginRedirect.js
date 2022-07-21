import React from 'react';
import { Navigate } from 'react-router-dom';
import ConnectWith from '../../pages/ConnectWith/ConnectWith';

const LoginRedirect = ({ LoginAuth }) => {
  return LoginAuth ? <ConnectWith /> : <Navigate to='/chemiverseOnUp/login' />;
};

export default LoginRedirect;