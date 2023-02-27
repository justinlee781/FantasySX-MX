import React from 'react';
import { Button } from '@mui/material';
import './Supercross.css';

const Supercross = () => {
  return (
    <div className="supercross-container">
      <h1>Supercross</h1>
      <div className="buttons-container">
        <Button variant="contained" color="primary" className="button">450SX</Button>
        <Button variant="contained" color="primary" className="button">250E</Button>
        <Button variant="contained" color="primary" className="button">250W</Button>
      </div>
    </div>
  );
};

export default Supercross;


