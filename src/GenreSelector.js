import React from 'react';
import Select from 'react-select';

const GenreSelector = ({ genres, handleGenreChange }) => {
  const options = genres.map(genre => ({
    label: genre.name,
    value: genre.id,
  }));

  const handleChange = (selectedOptions) => {
    const selectedGenreIds = selectedOptions.map(option => option.value);
    handleGenreChange(selectedGenreIds);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Select Genres:</label>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default GenreSelector;
