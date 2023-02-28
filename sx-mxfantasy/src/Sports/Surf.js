import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Grid, Typography, Link } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4),
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: 150,
    height: '100%',
    objectFit: 'contain',
    marginRight: theme.spacing(2),
  },
}));

function Surf() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://www.worldsurfleague.com/static/assets/sharable-images/facebook-default.jpg"
              title="WSL logo"
            />
            <CardContent className={classes.content}>
              <Typography variant="h5" component="h2">
                World Surf League
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The global home of surfing, hosting world-class events on the Men's and Women's Championship Tours.
              </Typography>
            </CardContent>
            <Link href="https://www.worldsurfleague.com/events?month=february&year=2023" target="_blank" rel="noopener">
              Learn More
            </Link>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Surf;
