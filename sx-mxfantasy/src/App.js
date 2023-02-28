import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Supercross from './Sports/Supercross';
import Login from './components/Header/Login';
import Profile from './components/Header/Profile';
import Standings from './components/Header/Standings';
import Picks from './components/Header/Picks';
import Surf from './Sports/Surf'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/supercross" element={<Supercross />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/standings" element={<Standings profile={{ name: 'John Doe', date: '2022-02-28' }} />} />
        <Route path="/picks" element={<Picks />} />
        <Route path="/surf" element={<Surf />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;




