import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('/api/auth/status')
      .then(res => res.json())
      .then(data => setIsAuthenticated(data.isAuthenticated));
  }, []);

  if (!isAuthenticated) {
    return null; // Don't render the navbar if the user is not authenticated
  }

  return (
    <nav>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}

export default Navbar;

