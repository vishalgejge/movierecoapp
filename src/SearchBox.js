import React, { useState } from 'react';

const SearchBox = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBox;
