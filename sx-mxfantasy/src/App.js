import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Picks from './pages/Picks';
import Devyn from './ProPicks/devyn';
import Brian from './ProPicks/brian';
import Overall from './pages/Overall';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7S1T1nali0wDElNBPm4uaLbCs-sEserE",
  authDomain: "fantasy-sports-798ec.firebaseapp.com",
  projectId: "fantasy-sports-798ec",
  storageBucket: "fantasy-sports-798ec.appspot.com",
  messagingSenderId: "871522821047",
  appId: "1:871522821047:web:b73d7dabb15278ed45be32",
  measurementId: "G-2KF91FL1QY"
};

initializeApp(firebaseConfig);
const firestore = getFirestore();

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

