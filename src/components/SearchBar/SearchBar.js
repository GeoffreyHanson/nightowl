import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchYelp, setIsLoading }) => {
  const [location, setLocation] = useState('');

  const handleSearch = (event) => {
    setIsLoading(true);
    searchYelp(location);
    event.preventDefault();
  };

  return (
    <div className={styles.SearchBar}>
      <h2>Location</h2>
      <form
        className={styles.SearchForm}
        onSubmit={handleSearch}
      >
        <input
          className={styles.LocationInput}
          onChange={(event) => setLocation(event.target.value)}
        />
        {/* <br /> */}
        <button
          className={styles.SubmitButton}
          type="submit"
          // onClick={handleSearch}
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
