import './RootLayout.css';

import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom';
import React from 'react';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className='main-size'>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
