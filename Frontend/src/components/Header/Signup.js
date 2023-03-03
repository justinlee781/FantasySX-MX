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
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Create an object with the email and password
    const user = { email, password };

    try {
      // Send a POST request to the API endpoint with the user object as the request body
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        // Redirect the user to the login page or do something else
        window.location.href = '/login';
      } else {
        // Display an error message to the user
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      // Display an error message to the user
      alert(`Error: ${err.message}`);
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
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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

