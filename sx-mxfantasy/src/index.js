import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB7S1T1nali0wDElNBPm4uaLbCs-sEserE",
  authDomain: "fantasy-sports-798ec.firebaseapp.com",
  projectId: "fantasy-sports-798ec",
  storageBucket: "fantasy-sports-798ec.appspot.com",
  messagingSenderId: "871522821047",
  appId: "1:871522821047:web:b73d7dabb15278ed45be32",
  measurementId: "G-2KF91FL1QY"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
