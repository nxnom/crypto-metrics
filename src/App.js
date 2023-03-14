import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default App;
