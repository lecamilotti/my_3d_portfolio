import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
