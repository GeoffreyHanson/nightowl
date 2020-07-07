import React, { useState } from 'react';
// import './SearchBar.module.css';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const [location, setLocation] = useState('');

  // Desctructure in props
  const { searchYelp } = props;

  const handleSearch = (event) => {
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
export default SearchBar;
