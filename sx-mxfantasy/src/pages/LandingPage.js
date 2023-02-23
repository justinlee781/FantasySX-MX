import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button, TextField, Divider } from '@mui/material';
import Header from '../components/Header';
import './LandingPage.css';

const sports = [
  { id: 1, name: 'Formula 1', imageUrl: 'https://source.unsplash.com/featured/?formula1' },
  { id: 2, name: 'NASCAR', imageUrl: 'https://source.unsplash.com/featured/?nascar' },
  { id: 3, name: 'MotoGP', imageUrl: 'https://source.unsplash.com/featured/?motogp' },
  { id: 4, name: 'Supercross', imageUrl: 'https://source.unsplash.com/featured/?motogp' },
  { id: 5, name: 'Motocross', imageUrl: 'https://source.unsplash.com/featured/?motogp' },
  { id: 6, name: 'Surfing', imageUrl: 'https://source.unsplash.com/featured/?motogp' },
  { id: 7, name: 'Nascar', imageUrl: 'https://source.unsplash.com/featured/?motogp' },
  { id: 8, name: 'Indycar', imageUrl: 'https://source.unsplash.com/featured/?motogp' },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Grid container justifyContent="center">
        {sports.map((sport) => (
          <Grid item key={sport.id}>
            <Card className="card">
              <CardMedia className="media" image={sport.imageUrl} title={sport.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {sport.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="features-section">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" gutterBottom>
              Features
            </Typography>
            <Typography variant="body1" align="center">
              Here are some of the key features of our app:
            </Typography>
            <ul>
              <li>Customizable leagues with friends</li>
              <li>Live scoring and leaderboard updates</li>
              <li>Detailed stats and analytics</li>
              <li>Easy team management and roster changes</li>
            </ul>
            <Grid container justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary" href="/signup">
                  Sign Up Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="message-board-section">
        <Typography variant="h5" align="center" gutterBottom>
          Join the Discussion
        </Typography>
        <Typography variant="body1" align="center">
          Have a question or want to share your thoughts? Leave a message below:
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <form className="form">
              <TextField className="input" label="Name" variant="outlined" />
              <TextField className="input" label="Message" variant="outlined" multiline rows={4} />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <Divider />
            {/* Message board */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
