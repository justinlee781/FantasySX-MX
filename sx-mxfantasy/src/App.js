import React from "react";
import { Route, useLocation } from "react-router-dom";
import LandingPage from './LandingPage';
import Picks from './Picks';
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/picks" component={Picks} />
    </div>
  );
};

export default App;
