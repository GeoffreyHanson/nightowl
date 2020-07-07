import React, { useState } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import Yelp from './utilities/Yelp';
import './App.css';

const App = () => {
  const [cafes, setCafes] = useState([]);

  const searchYelp = (location) => {
    Yelp.search(location).then((cafe) => {
      setCafes(cafe);
    });
  };

  return (
    <div className="App">
      <Title />
      <SearchBar searchYelp={searchYelp} />
      <CafeList cafes={cafes} />
    </div>
  );
};

export default App;
