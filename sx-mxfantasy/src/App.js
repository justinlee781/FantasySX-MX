import React from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Picks from "./pages/Picks";
import Devyn from "./ProPicks/devyn";
import Brian from "./ProPicks/brian";
import Brando from "./ProPicks/brando";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Picks" element={<Picks />} />
      <Route path="/ProPicks/devyn" element={<Devyn />} />
      <Route path="/ProPicks/brian" element={<Brian />} />
      <Route path="/ProPicks/brando" element={<Brando />} />
    </React.Fragment>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
