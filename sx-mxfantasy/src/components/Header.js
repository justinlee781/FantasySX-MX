import React from 'react'
import { Paper, Container, } from "@mui/material"
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Container style={{ width: '100%' }}>
      <Paper elevation={3}>
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100px' }} />
      </Paper> 
    </Container>
  )
}

export default Header

