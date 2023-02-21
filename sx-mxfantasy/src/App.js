import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Picks from './pages/Picks';
import Devyn from './ProPicks/devyn';
import Brian from './ProPicks/brian';
import Overall from './pages/Overall';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/picks" element={<Picks />} /> 
        <Route path="/Overall" element={<Overall />} />
        <Route path="/propicks/devyn" element={<Devyn />} />
        <Route path="/propicks/brian" element={<Brian />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

