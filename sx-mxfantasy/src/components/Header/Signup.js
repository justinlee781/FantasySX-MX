import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  },
  input: {
    margin: '1rem',
  },
  button: {
    margin: '1rem',
  },
});

function Signup() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Create an object with the email and phone
    const user = { email, phone };

    // Send a POST request to the signup endpoint on the server
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    // Handle the response from the server
    if (response.ok) {
      // Redirect the user to the login page or do something else
      window.location.href = '/login';
    } else {
      // Display an error message to the user
      const errorMessage = await response.text();
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Paper elevation={3} className={classes.form}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            className={classes.input}
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.input}
            label="Phone"
            variant="outlined"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button 
            className={classes.button}
            variant="contained" 
            color="primary" 
            type="submit"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Signup;