import React, { useState } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import Yelp from './utilities/Yelp';
import styles from './App.module.css';

const App = () => {
  // const [error, setError] = useState(null);
  const [cafes, setCafes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* Moving cafes open overnight to the top and cafes without hours to the bottom,
   with the rest in between. */
  function sortCafes(cafesToSort) {
    // Sorting cafes from the latest open
    // const sortedCafes = cafesToSort.sort((a, b) => b.closingTime - a.closingTime);

    const cafesWithoutHours = [];
    const overnightCafes = [];
    const remainingCafes = [];

    // Pushing to relevent arrays based on criteria
    cafesToSort.forEach((cafe) => {
      if (cafe.closingTime === undefined) {
        cafesWithoutHours.push(cafe);
      } else if (cafe.overnight) {
        overnightCafes.push(cafe);
      } else {
        remainingCafes.push(cafe);
      }
    });

    // Sort each array
    const sortedOvernight = overnightCafes.sort((a, b) => b.closingTime - a.closingTime);
    const sortedRemaining = remainingCafes.sort((a, b) => b.closingTime - a.closingTime);

    // Combinding into a new array
    const combinedCafes = [...sortedOvernight, ...sortedRemaining, ...cafesWithoutHours];

    setIsLoading(false);

    // Sort the cafes from open latest
    setCafes(combinedCafes);
  }

  // Getting overnight details & closing times from Yelp
  function getDetails(cafesToDetail) {
    try {
    // const cafesToDetail = [...undetailedCafes];
    // const day = new Date().getDay();
      Promise.all(cafesToDetail.map((cafe) => Yelp.details(cafe.id)
        .then((cafeDetails) => {
          const detailedCafe = {
            ...cafe,
            // closingTime: twelveHourTime,
            closingTime: cafeDetails.closingTime,
            overnight: cafeDetails.overnight,
          };
          return detailedCafe;
        }))).then((detailedCafes) => sortCafes(detailedCafes));
    } catch (detailError) {
      setIsLoading(false);
      console.log(detailError);
      // setError(detailError);
    }
  }


  const searchYelp = (location) => {
    Yelp.search(location).then((cafeList) => {
      // setCafes(cafeList);
      getDetails(cafeList);
    });
    // For each cafe in cafes
  };


  return (
    <div className={styles}>
      <Title />
      <SearchBar
        searchYelp={searchYelp}
        setIsLoading={setIsLoading}
      />
      <CafeList
        cafes={cafes}
      />
      {isLoading ? <LoadingAnimation /> : null}
    </div>
  );
};

export default App;
