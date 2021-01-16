import React from 'react';

import { AuthProvider } from './Auth';
import { ToasProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToasProvider>{children}</ToasProvider>
  </AuthProvider>
);

export default AppProvider;
