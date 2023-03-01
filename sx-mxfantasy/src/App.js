import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Supercross from './Sports/Supercross';
import Login from './components/Header/Login';
import Profile from './components/Header/Profile';
import Standings from './components/Header/Standings';
import Picks from './components/Header/Picks';
import Surf from './Sports/Surf'
import Motogp from './Sports/Motogp';
import Nascar from './Sports/Nascar'
import Formula from './Sports/Formula1';
import Motocross from './Sports/Motocross';
import SX450 from './Sports/SubSport/SX/450sx';
import Signup from './components/Header/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/supercross" element={<Supercross />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/standings" element={<Standings profile={{ name: 'John Doe', date: '2022-02-28' }} />} />
        <Route path="/picks" element={<Picks />} />
        <Route path="/surf" element={<Surf />} />
        <Route path="/motogp" element={<Motogp />} />
        <Route path="/nascar" element={<Nascar />} />
        <Route path="/formula" element={<Formula />} />
        <Route path="/motocross" element={<Motocross />} />
        <Route path="/450sx" element={<SX450 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;




