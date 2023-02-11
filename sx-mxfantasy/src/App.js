import React from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements,
 Route,
RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Picks from "./pages/Picks";
import Devyn from "./pages/ProPicks/devyn";
import Brian from "./pages/ProPicks/brian";
import Brando from "./pages/ProPicks/brando";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
    <Route path="/" element={<LandingPage />} />
    <Route path="/Picks" element={<Picks />} />
    <Route path="/devyn" element={<Devyn />} />
    <Route path="/brian" element={<Brian />} />
    <Route path="/brando" element={<Brando />} />
  </React.Fragment>
  
)
)
function App() {
  return (
    <RouterProvider router={router} />
      
  );
}

export default App;

