import React, { useState } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';


const theme = createTheme({
  status: {
    confirmed: green[300],
    error: red[400]
  },
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  margin: '1rem',
  backgroundColor: theme.palette.primary.light,
}));

const ParentContainer = styled(Container)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function Signup() {
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
    <ThemeProvider theme={theme}>
      <ParentContainer sx={{ bgcolor: 'background.default' }}>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Sign Up
            </Typography>
            <CustomTextField
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSignup}
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </Paper>
        </Container>
      </ParentContainer>
    </ThemeProvider>
  );
}

export default Signup;
