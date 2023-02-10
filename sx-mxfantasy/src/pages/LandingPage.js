import React  from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Card, Button } from '@mui/material';
// import backgroundImage from './assets/sx2.png';

import { Link } from 'react-router-dom';
import Header from '../components/Header';


const LandingPage = () => {

return (
<Box component="section">
    <Header />
  
{/* <header >
</header> */}
<main >
<Card >
<Typography variant="h6">Welcome to Fantasy SX</Typography>
<Typography variant="body1">
Start picking your team and compete with your friends
</Typography>
<Button variant="contained" color="primary">
<Link
to="/register"
// style={{ textDecoration: 'none', color: '#fff' }}
>
Sign Up
</Link>
</Button>
</Card>
</main>
<footer >
<Typography variant="body1">Copyright © Fantasy SX 2023</Typography>

</footer>
</Box>
);
};
export default LandingPage;