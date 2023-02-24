import React from 'react';
import { TextField } from '@mui/material';
import { Grid, Typography, Button, Divider } from '@mui/material';
import Header from '../components/Header/Header';
import { OutlinedCard } from '../components/card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LandingPage.css';

const sports = [
{ id: 1, name: 'Formula 1', imageUrl: 'https://source.unsplash.com/featured/?formula1' },
{ id: 2, name: 'NASCAR', imageUrl: 'https://source.unsplash.com/featured/?nascar' },
{ id: 3, name: 'MotoGP', imageUrl: 'https://source.unsplash.com/featured/?motogp' },
{ id: 4, name: 'Supercross', imageUrl: 'https://source.unsplash.com/featured/?supercross' },
{ id: 5, name: 'Motocross', imageUrl: 'https://source.unsplash.com/featured/?motocross' },
{ id: 6, name: 'Surfing', imageUrl: 'https://source.unsplash.com/featured/?surfing' },
{ id: 7, name: 'Nascar', imageUrl: 'https://source.unsplash.com/featured/?nascar' },
{ id: 8, name: 'Indycar', imageUrl: 'https://source.unsplash.com/featured/?indycar' },
];

const LandingPage = () => {
return (
<div className="landing-page">

  {/* Header */}
  <Header />

  {/* Animated background */}
  <div className="animated-background">
    <div className="a"></div>
    <div id="circle"></div>
  </div>

  {/* Sports section */}
  <div className="sports-section">
    <Typography variant="h5" align="center" gutterBottom>
      Sports
    </Typography>
    <Divider />
    <Slider infinite={true} slidesToShow={4} slidesToScroll={1} arrows={true} dots={false}>
      {sports.map((sport) => (
        <OutlinedCard key={sport.id} imageUrl={sport.imageUrl} name={sport.name} />
      ))}
    </Slider>
  </div>

  {/* Features section */}
  <div className="features-section">
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h5" align="center" gutterBottom>
                Features
              </Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center">
Season-long competition: The competition will run throughout the season of each sports series. Users will accumulate points based on the performance of the athletes they select throughout the season, and the user with the most points at the end of the season will be declared the winner.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
    </Grid>
        
    </Grid>
  </div>

  {/* Newsletter section */}
  <div className="newsletter-section">
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h5" align="center" gutterBottom>
                Subscribe to our Newsletter
                </Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            Get the latest news and updates delivered straight to your inbox.
          </Typography>
        </Grid>
        <Grid item>
          <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </form>
        </Grid>
      </Grid>
    
  </Grid>
</Grid>
</div>
{/* Footer */}

  <div className="footer">
    <Typography variant="body1" align="center">
      &copy; 2023 Sportsify. All rights reserved.
    </Typography>
  </div>
</div>
);
};
export default LandingPage;