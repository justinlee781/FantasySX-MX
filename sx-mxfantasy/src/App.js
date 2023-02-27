import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Supercross from './Sports/Supercross';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/supercross" element={<Supercross />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


