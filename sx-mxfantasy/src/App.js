import React from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements,
 Route,
RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Picks from "./pages/Picks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
    <Route path="/" element={<LandingPage />} />
    <Route path="/Picks" element={<Picks />} />
  </React.Fragment>
  
)
)
function App() {
  return (
    <RouterProvider router={router} />
      
  );
}

export default App;
