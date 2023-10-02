import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { AuthProvider } from './context/AuthContext.jsx';
import { ShoeProvider } from './context/ShoeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ShoeProvider>
  </React.StrictMode>,
);
