import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function Profile() {
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
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
      <Box sx={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          {image ? (
            <img src={image} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Typography variant="h4" sx={{ color: 'text.secondary' }}>+</Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ flex: '1' }}>
        <Typography variant="h5" sx={{ marginBottom: '0.5rem' }}>{name}</Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: '1rem' }}>{bio}</Typography>
        <form onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              sx={{ borderRadius: '0.25rem', border: '1px solid #ccc', padding: '0.25rem' }}
            />
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              id="bio"
              type="text"
              placeholder="Bio"
              value={bio}
              onChange={handleBioChange}
              sx={{ borderRadius: '0.25rem', border: '1px solid #ccc', padding: '0.25rem' }}
            />
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              id="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
              sx={{ borderRadius: '0.25rem', border: '1px solid #ccc', padding: '0.25rem' }}
            />
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              id="website"
              type="text"
              placeholder="Website"
              value={website}
              onChange={handleWebsiteChange}
              sx={{ borderRadius: '0.25rem', border: '1px solid#ccc', padding: '0.25rem' }}
              />
              </Box>
              <Box sx={{ marginBottom: '1rem' }}>
              <Button variant="contained" component="label">
              Upload Image
              <input type="file" accept="image/*" hidden onChange={handleImageChange} />
              </Button>
              </Box>
              <Button type="submit" variant="contained">Save</Button>
              </form>
              </Box>
              </Box>
              );
              }
              
              export default Profile;

