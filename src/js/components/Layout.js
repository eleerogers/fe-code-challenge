import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import ErrorBoundary from '../components/errorBoundary';
import PropTypes from 'prop-types';


function Layout({ children }) {
  // keep track of path to update ErrorBoundary key so it will reset as you navigate through app
  const { pathname } = useLocation();

  return (
    <div>
      <Header />
      <div className="min-height-container">
        <ErrorBoundary key={pathname}>
          {children}
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
