import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with name and image, e.g. save to database
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>Create your profile</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ marginRight: '0.5rem' }}>Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="image" style={{ marginRight: '0.5rem' }}>Image:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#0077FF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none' }}>Create Profile</button>
      </form>
      {image && (
        <div style={{ marginTop: '1rem' }}>
          <img src={image} alt="profile" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default Profile;
