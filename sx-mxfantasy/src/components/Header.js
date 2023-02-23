import React from 'react';
import { Container, AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container style={{ width: '100%', position: 'flex', top: '0', zIndex: '1' }}>
      <AppBar position="static" style={{ backgroundColor: '#ffff', boxShadow: 'none' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" component={Link} to="/" color="secondary" style={{ fontFamily: 'Lobster Two', textDecoration: 'none' }}>
            Atmosphere
          </Typography>
          <div>
            <Button component={Link} to="/picks" color="secondary" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', marginRight: 16 }}>
              My Picks
            </Button>
            <Button component={Link} to="/standings" color="secondary" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', marginRight: 16 }}>
              Standings
            </Button>
            <Button component={Link} to="/rules" color="secondary" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', marginRight: 16 }}>
              Rules
            </Button>
            <Button component={Link} to="/login" variant="outlined" color="secondary" style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;



