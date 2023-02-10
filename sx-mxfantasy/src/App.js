import React from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements,
 Route,
RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage />}/>
    
)
)
function App() {
  return (
    <RouterProvider router={router} />
      
  );
}

export default App;
