import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortifolioProvider from './home/context/PortifolioProvider';
import Home from './home/pages/Home';
import NotFound from './home/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PortifolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PortifolioProvider>
  );
}

export default App;
