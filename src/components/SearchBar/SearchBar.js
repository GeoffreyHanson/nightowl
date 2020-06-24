import React from 'react';
// import './SearchBar.module.css';
import styles from './SearchBar.module.css';

const SearchBar = (props) => (
  <div className={styles.SearchBar}>
    {/* TODO: onChange */}
    <input className={styles.LocationInput} placeholder="Location" />
    <br />
    <button className={styles.SubmitButton} type="button">Search</button>
  </div>
);

export default SearchBar;
