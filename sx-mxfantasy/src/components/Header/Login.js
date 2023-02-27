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

function Login() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    // add login logic here
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Paper elevation={3} className={classes.form}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          <TextField
            className={classes.input}
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
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
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
