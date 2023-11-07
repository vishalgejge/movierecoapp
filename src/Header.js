import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary text-white text-center py-5" style={{ borderRadius: '5px', marginBottom: '20px'}}>
      <h1>Movie Recommendation App</h1>
      <p className="lead">Select your favorite genres and get movie recommendations!</p>
    </header>
  );
};

export default Header;
