import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import './RootLayout.css';


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
