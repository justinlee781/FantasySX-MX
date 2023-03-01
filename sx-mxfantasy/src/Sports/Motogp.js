import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    backgroundColor: '#2196f3',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 600,
    padding: '1.5rem 3rem',
    borderRadius: '2rem',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      backgroundColor: '#1976d2',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    },
  },
}));

function Motogp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained" component={Link} to="https://www.motogp.com/en/news/2022/09/30/2023-motogp-calendar-countries-circuits-dates/432916" target="_blank" rel="noopener noreferrer">
        Event
      </Button>
    </div>
  );
}

export default Motogp;