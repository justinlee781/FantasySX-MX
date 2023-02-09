import React from "react";
import { Route, useLocation, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './LandingPage';
import Picks from './Picks';
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <Router>
      <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/Picks" component={Picks} />
      </div>
    </Router>
  );
};

export default App;