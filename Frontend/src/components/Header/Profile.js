import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  IconButton,
  Stack,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const Profile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with name, bio, location, website, and image, e.g. save to database
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: '2rem',
        fontFamily: 'Montserrat, sans-serif',
        color: '#333',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '200px' },
          height: { xs: 'auto', md: '200px' },
          borderRadius: '50%',
          overflow: 'hidden',
          margin: { xs: '0 auto', md: '0' },
        }}
      >
        <Avatar
          src={image}
          alt="profile picture"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          {!image && <Typography variant="h4" sx={{ fontFamily: 'Pacifico, cursive', color: '#fff' }}>{name[0]}</Typography>}
        </Avatar>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="image">
          <IconButton
            component="span"
            sx={{ position: 'absolute', bottom: '0', right: '0', margin: '0.5rem', backgroundColor: '#fff', color: '#333' }}
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Box>
      <Box sx={{ flex: '1' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing="1rem">
          <TextField
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            sx={{ flex: 1, minWidth: '10rem', marginRight: { md: '1rem' }, fontFamily: 'Montserrat, sans-serif' }}
            InputProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' },
              disableUnderline: true,
            }}
          />
          <TextField
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
            sx={{ flex: 1, minWidth: '10rem', fontFamily: 'Montserrat, sans-serif' }}
            InputProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' },
              disableUnderline: true,
            }}
          />
        </Stack>
        <TextField
          id="bio"
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={handleBioChange}
          sx={{ marginTop: '1rem', fontFamily: 'Montserrat, sans-serif' }}
          InputProps={{
            sx: { fontFamily: 'Montserrat, sans-serif' },
            disableUnderline: true,
          }}
        />
        <TextField
          id="website"
          type="text"
          placeholder="Website"
          value={website}
          onChange={handleWebsiteChange}
          sx={{ marginTop: '1rem', fontFamily: 'Montserrat, sans-serif' }}
          InputProps={{
            sx: { fontFamily: 'Montserrat, sans-serif' },
            disableUnderline: true,
          }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: '1rem', fontFamily: 'Montserrat, sans-serif' }}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Box>
    );
    };
    
    export default Profile;