import React from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './components';
import { AppRoutes } from './routes';
import { AuthProvider } from './auth';
import { BrowserRouter } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
