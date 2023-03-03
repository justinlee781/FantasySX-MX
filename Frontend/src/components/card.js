import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './card.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const OutlinedCard = ({ imageUrl, name }) => {
  return (
    <Card variant="outlined" className="card">
      <CardMedia
        component="img"
        height="80"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="card-title">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

const RaisedCard = ({ children }) => {
  return (
    <Card variant="outlined" className="card">
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const CardCarousel = ({ cards }) => {
  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <OutlinedCard imageUrl={card.imageUrl} name={card.name} />
        </div>
      ))}
    </Slider>
  );
};

export { OutlinedCard, RaisedCard, CardCarousel };
