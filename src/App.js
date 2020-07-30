import React, { useState } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import Yelp from './utilities/Yelp';
import './App.css';

const App = () => {
  const [cafes, setCafes] = useState([]);

  function getDetails(cafesToDetail) {
    Promise.all(cafesToDetail.map((cafe) => Yelp.details(cafe.id)
      .then((cafeDetails) => {
        const detailedCafe = {
          ...cafe,
          closingTime: cafeDetails.closingTime,
          overnight: cafeDetails.overnight,
        };
        return detailedCafe;
      }))).then((detailedCafes) => setCafes(detailedCafes));
  }


  const searchYelp = (location) => {
    Yelp.search(location).then((cafeList) => {
      // console.table(cafeList);
      // setCafes(cafeList);
      getDetails(cafeList);
    });
    // For each cafe in cafes
  };


  return (
    <div className="App">
      <Title />
      <SearchBar searchYelp={searchYelp} />
      <CafeList
        cafes={cafes}
        // setCafes={setCafes}
      />
    </div>
  );
};

export default App;
