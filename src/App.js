import React, { useState } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import Yelp from './utilities/Yelp';
import './App.css';

const App = () => {
  const [cafes, setCafes] = useState([]);

  /* Moving cafes open overnight to the top and cafes without hours to the bottom,
   with the rest in between. */
  function sortCafes(cafesToSort) {
    // Sorting cafes from the latest open
    const sortedCafes = cafesToSort.sort((a, b) => b.closingTime - a.closingTime);

    const cafesWithoutHours = [];
    const overnightCafes = [];
    const remainingCafes = [];

    // Pushing to relevent arrays based on criteria
    sortedCafes.forEach((cafe) => {
      if (cafe.closingTime === undefined) {
        cafesWithoutHours.push(cafe);
      } else if (cafe.overnight) {
        overnightCafes.push(cafe);
      } else {
        remainingCafes.push(cafe);
      }
    });

    // Combinding into a new array
    const combinedCafes = [...overnightCafes, ...remainingCafes, ...cafesWithoutHours];

    // Sort the cafes from open latest
    setCafes(combinedCafes);
  }

  // Getting overnight details & closing times from Yelp
  function getDetails(cafesToDetail) {
    Promise.all(cafesToDetail.map((cafe) => Yelp.details(cafe.id)
      .then((cafeDetails) => {
        const detailedCafe = {
          ...cafe,
          closingTime: cafeDetails.closingTime,
          overnight: cafeDetails.overnight,
        };
        return detailedCafe;
      }))).then((detailedCafes) => sortCafes(detailedCafes));
  }


  const searchYelp = (location) => {
    Yelp.search(location).then((cafeList) => {
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
      />
    </div>
  );
};

export default App;
