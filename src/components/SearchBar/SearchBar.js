import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchYelp, setIsLoading }) => {
  const [location, setLocation] = useState('');

  // Desctructure in props

  const handleSearch = (event) => {
    setIsLoading(true);
    searchYelp(location);
    event.preventDefault();
  };

  return (
    <div className={styles.SearchBar}>
      <h2>Location</h2>
      <input
        className={styles.LocationInput}
        // placeholder="Location"
        onChange={(event) => setLocation(event.target.value)}
      />
      <br />
      <button
        className={styles.SubmitButton}
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  searchYelp: PropTypes.func,
  setIsLoading: PropTypes.func,
};

export default SearchBar;
