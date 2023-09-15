import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Portal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portal />
    <App />
  </React.StrictMode>
);