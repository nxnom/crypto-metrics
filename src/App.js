import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Router from './router';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Router />
    </>
  );
}

export default App;
