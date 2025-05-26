import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';
import { CartProvider } from './context/cartcontext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
