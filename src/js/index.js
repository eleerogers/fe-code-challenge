import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductContextProvider } from './contexts/ProductContext';
import App from './app';


render(
  <ProductContextProvider>
    <Router>
      <App />
    </Router>
  </ProductContextProvider>,
  document.getElementById('app')
);
