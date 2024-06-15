
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
import { AuthProvider } from './context/AuthContex';
import App from './App';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'


ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);
