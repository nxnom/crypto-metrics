import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Router from './router';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Router />
    </>
  );
}

export default App;
