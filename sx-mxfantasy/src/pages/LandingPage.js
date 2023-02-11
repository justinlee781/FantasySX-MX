import React from 'react';
import { Typography, Box, Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import backgroundImage from '../assets/sx2.png';

const LandingPage = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <Header />
      <main>
        <Card>
          <Typography variant="h6" align="center">Welcome to Fantasy SX</Typography>
          <Typography variant="body1" align="center">
            Start picking your team and compete with your friends
          </Typography>
          <Box mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="primary">
              <Link to="/Picks">Sign Up</Link>
            </Button>
          </Box>
        </Card>
      </main>
      <footer>
        <Typography variant="body1" align="center">Copyright © Fantasy SX 2023</Typography>
      </footer>
    </Box>
  );
};

export default LandingPage;
