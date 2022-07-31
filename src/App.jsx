import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortifolioContext from './context/PortifolioContext';

function App() {
  return (
    <PortifolioContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PortifolioContext>
  );
}

export default App;
