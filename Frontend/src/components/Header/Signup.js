import React, { useState, useRef } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';
import axios from "axios";

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
  const formRef = useRef(null);

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      // Send a POST request to the API endpoint with the email and password as the request body
      const response = await axios.post('http://localhost:5001/User', {
        email: email,
        password: password
      });
  
      if (response.status === 200) {
        // Submit the form
        formRef.current.submit();
      } else {
        // Display an error message to the user
        alert(`Error: ${response.data.message}`);
      }
    } catch (err) {
      // Display an error message to the user
      alert(`Error: ${err.message}`);
    }
  };
  
  
return (
    <ThemeProvider theme={theme}>
      <ParentContainer sx={{ bgcolor: 'background.default' }}>
        <Container
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          component='form'
          ref={formRef}
          action='/profile'
          method='post'
        >
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Sign Up
            </Typography>
            <CustomTextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextField
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="false"
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
