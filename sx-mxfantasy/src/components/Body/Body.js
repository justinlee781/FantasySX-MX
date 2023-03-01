import { Grid, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import './Body.css';

const sportsData = [
  {
    name: 'Formula 1',
    icon: '🏎️',
    color: '#FF5733',
    bio: 'The Formula 1 season is an annual competition that consists of a series of races held around the world on various racetracks. The season typically runs from March to December and features 20-23 races in different countries. Drivers compete in specially designed single-seater cars, which are among the fastest in the world, with speeds reaching up to 370 km/h (230 mph). The races are highly competitive, with drivers and teams competing for the Constructors Championship and Drivers Championship titles. Points are awarded based on the finishing position in each race, with the driver and team that accumulate the most points at the end of the season being crowned the champions. '
  },
  {
    name: 'NASCAR',
    icon: '🏁',
    color: '#A569BD',
    bio: 'The NASCAR Cup Series is the premier stock car racing series in North America. The season typically runs from February to November, featuring races on various tracks across the United States. The season is divided into three segments, with the first 26 races being the regular season, followed by the playoffs, which consist of 10 races among the top 16 drivers in points, and then finally the championship race.'
  },
  {
    name: 'MotoGP',
    icon: '🏍️',
    color: '#28B463',
    bio: 'MotoGP is a premier class of motorcycle road racing, which features high-performance motorcycles racing on road circuits around the world. The MotoGP season typically runs from March to November and consists of 18-20 races held in different countries.'
  },
  {
    name: 'Supercross',
    icon: '🏍️',
    color: '#F4D03F',
    bio: 'Supercross is a type of off-road motorcycle racing that typically takes place in indoor stadiums or outdoor tracks with man-made obstacles. The supercross season typically starts in January and ends in May, with races taking place on Saturday evenings. The season consists of 17 rounds, with races held in different cities across the United States. The riders compete in various classes based on their skill level and bike size, with the premier class being the 450cc class. The races are intense and fast-paced, with riders navigating jumps, tight corners, and other obstacles while racing to cross the finish line first. The rider with the most points at the end of the season is crowned the Supercross Champion.'
  },
  {
    name: 'Motocross',
    icon: '🏍️',
    color: '#3498DB',
    bio: 'Motocross is a form of off-road motorcycle racing that takes place on natural terrain tracks with hills, jumps, and other obstacles. The professional motocross season typically runs from May through August and consists of a series of races held across different locations.'
  },
  {
    name: 'Surfing',
    icon: '🏄',
    color: '#E74C3C',
    bio: 'The WSL season typically runs from March through December, with surfers accumulating points at each event towards their rankings on the championship tour. The top surfers from the championship tour qualify for the season-ending WSL Finals, where they compete for the World Title. The WSL Finals consist of a one-day, winner-takes-all event held at a single location, with the top five men and women surfers battling it out in a head-to-head format to determine the world champion.'
  },
  {
    name: 'Indycar',
    icon: '🏎️',
    color: '#FFC300',
    bio: 'he IndyCar season is an American open-wheel racing series that typically runs from March to September. The season includes a mix of oval and road course races across the United States, as well as one race in Canada. The championship is contested by teams running with identical chassis and engines, with a focus on driver skill and strategy. The Indy 500, held annually in May, is the most prestigious race on the calendar and one of the most famous motor racing events in the world.'
  }
]

const Body = () => {
const [selectedSport, setSelectedSport] = useState(null);

const handleSportClick = (sport) => {
setSelectedSport(sport);
};

return (
<Grid container className="body-container">
<Grid item xs={12}>
<Typography variant="h3" align="center">
Sports List
</Typography>
</Grid>
{sportsData.map((sport, index) => (
<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
<div
className={`sport-card ${selectedSport === sport ? 'selected' : ''}`}
style={{ backgroundColor: sport.color }}
onClick={() => handleSportClick(sport)}
>
<div className="sport-icon">{sport.icon}</div>
<Typography variant="h6">{sport.name}</Typography>
</div>
</Grid>
))}
<Grid item xs={12}>
{selectedSport ? (
<div className="selected-sport-container">
<IconButton
className="close-button"
onClick={() => setSelectedSport(null)}
>

</IconButton>
<div className="selected-sport-card" style={{ backgroundColor: selectedSport.color }}>
<div className="sport-icon">{selectedSport.icon}</div>
<Typography variant="h4">{selectedSport.name}</Typography>
<Typography variant="body1">{selectedSport.bio}</Typography>
</div>
</div>
) : (
<Typography variant="body1" align="center">
Select a sport to learn more
</Typography>
)}
</Grid>
</Grid>
);
};

export default Body;

