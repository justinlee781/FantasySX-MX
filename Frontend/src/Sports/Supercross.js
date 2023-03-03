import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Supercross.css';

const Supercross = () => {
  return (
    <div className="supercross-container">
      <h1>Supercross</h1>
      <div className="buttons-container">
        <Button variant="contained" color="primary" className="button" component={Link} to="/450sx">
          450SX
        </Button>
        <Button variant="contained" color="primary" className="button" component={Link} to="/250e">
          250E
        </Button>
        <Button variant="contained" color="primary" className="button" component={Link} to="/250w">
          250W
        </Button>
      </div>
    </div>
  );
};

export default Supercross;
