import React from 'react';
import { Navigate } from 'react-router-dom';
import ConnectWith from '../../pages/ConnectWith/ConnectWith';
import Login from '../Main/OnAndUp/SideItem/Login/Login';

const LoginRedirect = ({ LoginAuth }) => {
  return LoginAuth ? <ConnectWith /> : <Login />;
};

export default LoginRedirect;