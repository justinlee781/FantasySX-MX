import { Grid, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import '../Body/Body.css';

const tileData = [
  { icon: '🏎️', sport: 'Formula 1', color: '#FF5733' },
  { icon: '🏁', sport: 'NASCAR', color: '#A569BD' },
  { icon: '🏍️', sport: 'MotoGP', color: '#28B463' },
  { icon: '🏍️', sport: 'Supercross', color: '#F4D03F' },
  { icon: '🏍️', sport: 'Motocross', color: '#3498DB' },
  { icon: '🏄', sport: 'Surfing', color: '#E74C3C' },
  { icon: '🏁', sport: 'NASCAR', color: '#A569BD' },
  { icon: '🏎️', sport: 'Indycar', color: '#FFC300' },
];

const SportsBlock = () => {
  const [selectedSport, setSelectedSport] = useState('');

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Upcoming Races
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {tileData.map((tile) => (
          <Grid item key={tile.sport}>
            <IconButton
              style={{ backgroundColor: tile.color }}
              onClick={() => handleSportClick(tile.sport)}
            >
              <Typography variant="h5">{tile.icon}</Typography>
            </IconButton>
          </Grid>
        ))}
      </Grid>

      {selectedSport && (
        <div>
          <Typography variant="h5" align="center" gutterBottom>
            {selectedSport}
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales nulla ac neque placerat auctor. Nullam eu ex sapien. Aliquam sollicitudin euismod ex quis ultrices. Fusce vitae est auctor, efficitur mi vel, tempus neque.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default SportsBlock;

