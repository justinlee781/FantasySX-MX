import React from 'react';
import { Container, AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container style={{ width: '100%', position: 'flex', top: '0', zIndex: '1' }}>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            style={{
              color: 'green',
              WebkitTextStroke: '1px black',
              fontFamily: "'Roboto Mono', monospace",
              textDecoration: 'none',
              fontWeight: 'bold', // bold added
            }}
          >
            <span style={{ color: 'green' }}>Atmosphere</span> {/* name in span with black color */}
          </Typography>
          <div>
            <Button
              component={Link}
              to="/picks"
              color="secondary"
              style={{
                color: 'black',
                WebkitTextStroke: '1px black',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                marginRight: 16,
              }}
            >
              My Picks
            </Button>
            <Button
              component={Link}
              to="/standings"
              color="secondary"
              style={{
                color: 'black',
                WebkitTextStroke: '1px black',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                marginRight: 16,
              }}
            >
              Standings
            </Button>
            <Button
              component={Link}
              to="/profile"
              color="secondary"
              style={{
                color: 'black',
                WebkitTextStroke: '1px black',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                marginRight: 16,
              }}
            >
              Profile
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              color="secondary"
              style={{
                color: 'black',
                borderColor: 'black',
                fontFamily: 'Monospace',
                fontWeight: 'bold',
              }}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
