import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Card, Button } from '@material-ui/core';
import videoSrc from './assets/mx.mp4';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
header: {
backgroundColor: '#6d89c5',
textAlign: 'center',
padding: theme.spacing(2),
fontWeight: 'bold',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
height: '10vh',
fontFamily: 'Impact, sans-serif',
color: 'red',
textShadow: '1px 1px 1px black',
},
centerCardContainer: {
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '70vh',
backgroundSize: 'cover',
backgroundPosition: 'center center',
position: 'relative',
},
video: {
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
objectFit: 'cover',
},
footer: {
backgroundColor: '#00FF00',
textAlign: 'center',
padding: theme.spacing(2),
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
height: '15vh',
},
centerCard: {
backgroundColor: '#FF4136',
padding: theme.spacing(4),
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.2)',
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
textAlign: 'center',
fontWeight: 'bold',
textShadow: '1px 1px 1px black',
color: '#fff',
},
}));

const LandingPage = () => {
const classes = useStyles();


return (
  <Box component="section">
    <header className={classes.header}>
      <img src={logo} alt="Logo" />
    </header>
    <main className={classes.centerCardContainer}>
      <video
        className={classes.video}
        src={videoSrc}
        autoPlay
        loop
        muted
      />
      <Card className={classes.centerCard}>
        <Typography variant="h6">Welcome to Fantasy SX</Typography>
        <Typography variant="body1">
          Start picking your team and compete with your friends
        </Typography>
       
<Button component={Link} to="/register" variant="contained" color="primary">
          Register
        </Button>
      </Card>
    </main>
    <footer className={classes.footer}>
      <Typography variant="body2">
        Fantasy SX 2023 &copy; All rights reserved
      </Typography>
    </footer>
  </Box>
);
};
export default LandingPage;