import React from 'react'
import { Paper, Container, Typography } from "@mui/material"
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <Container>
        <Paper elevation={3}>
            <img src={logo} alt="Logo" />
        </Paper> 
        <Typography sx={{
            width: 300,
            backgroundColor: "magenta",
            '&:hover':{
                backgroundColor: 'gray',
            },
        }} 
        variant="h1"
        
        > This is the header component </Typography>
    </Container>
  )
}

export default Header