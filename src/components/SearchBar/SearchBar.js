import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

// Takes input and passes it to the search util (Yelp.js).
const SearchBar = ({ searchYelp, setIsLoading }) => {
  const [location, setLocation] = useState('');

  // Triggering animation and search.
  const handleSearch = (event) => {
    setIsLoading(true);
    searchYelp(location);
    event.preventDefault();
  };

  return (
    <div className={styles.SearchBar}>
      <h2 className={styles.Location}>Location</h2>
      <form
        className={styles.SearchForm}
        onSubmit={handleSearch}
      >
        <input
          className={styles.LocationInput}
          onChange={(event) => setLocation(event.target.value)}
        />
        <button
          className={styles.SubmitButton}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchYelp: PropTypes.func,
  setIsLoading: PropTypes.func,
};

export default SearchBar;
