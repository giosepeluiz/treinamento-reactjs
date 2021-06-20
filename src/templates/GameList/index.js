import React from 'react';
import App from './App';
import AuthProvider from './providers/auth';

const GameList = () => {
  return (
    //! Provedor global que está em './providers/auth'
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default GameList;
