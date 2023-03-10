import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ProfileCard = styled(Card)({
  maxWidth: 500,
  margin: 'auto',
  marginTop: 20,
});

const ProfileMedia = styled(CardMedia)({
  height: 300,
});

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handleProfilePictureChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <ProfileCard>
      <ProfileMedia
        component="img"
        image={profilePicture || '/default-profile-picture.png'}
      />
      <CardContent>
        <TextField
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bio"
          value={bio}
          onChange={handleBioChange}
          multiline
          fullWidth
          margin="normal"
        />
        <Button variant="contained" component="label">
          Upload Profile Picture
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            hidden
          />
        </Button>
      </CardContent>
    </ProfileCard>
  );
};

export default Profile;
