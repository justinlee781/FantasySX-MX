import React from 'react';
import { Container, Paper } from '@mui/material';

const Header = () => {
  return (
    <Container style={{ width: '100%', position: 'fixed', top: '0', zIndex: '1' }}>
      <Paper elevation={3} style={{ backgroundColor: "transparent" }}>
      </Paper>
    </Container>
  );
};

export default Header;
