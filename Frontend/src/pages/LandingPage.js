import React from 'react';
import { Typography } from '@mui/material';
import { OutlinedCard } from '../components/card';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LandingPage.css';
import TablePage from '../components/Body/TablePage';
import Body from '../components/Body/Body';
import ChatBox from '../components/Body/ChatBox';
import Footer from '../components/Footer/Footer';

const sports = [  
  { id: 1, name: 'Formula 1', imageUrl: 'https://source.unsplash.com/featured/?formula1', eventsUrl: '/Formula' },  
  { id: 2, name: 'MotoGP', imageUrl: 'https://source.unsplash.com/featured/?motogp', eventsUrl: '/Motogp' },  
  { id: 3, name: 'Supercross', imageUrl: 'https://source.unsplash.com/featured/?supercross', eventsUrl: '/Supercross' },  
  { id: 4, name: 'Motocross', imageUrl: 'https://source.unsplash.com/featured/?motocross', eventsUrl: '/Motocross' },  
  { id: 5, name: 'Surfing', imageUrl: 'https://source.unsplash.com/featured/?surfing', eventsUrl: '/Surf' },  
  { id: 6, name: 'Nascar', imageUrl: 'https://source.unsplash.com/featured/?nascar', eventsUrl: '/Nascar' },  
  { id: 7, name: 'Indycar', imageUrl: 'https://source.unsplash.com/featured/?indycar', eventsUrl: 'Indycar' },
];

const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <Header />

      {/* Sports section */}
      <div className="sports-section">
        <Typography variant="h5" align="center" gutterBottom>
          Sports
        </Typography>

        <Slider {...settings}>
          {sports.map((sport) => (
            <Link key={sport.id} to={sport.eventsUrl}>
              <OutlinedCard imageUrl={sport.imageUrl} name={sport.name} />
            </Link>
          ))}
        </Slider>
      </div>

      <div style={{ borderTop: "1px solid black" }}></div>

      {/* Body section */}
      <div className="SportsBlock">
        <Body />
      </div>

      <div style={{ borderTop: "1px solid black" }}></div>

      {/* Table section */}
      <div className="table-section">
        <TablePage />
      </div>


      {/* Chatbox section */}
      <div className="table-section">
        <ChatBox />
      </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
    