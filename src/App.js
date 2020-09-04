import React, { useState } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import Yelp from './utilities/Yelp';
import styles from './App.module.css';
import getDetails from './utilities/getDetails';
import sortCafes from './utilities/sortCafes';

const App = () => {
  // const [error, setError] = useState(null);
  const [cafes, setCafes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Seaching the Yelp API for coffee shops near the location
  const searchYelp = (location) => {
    Yelp.gqlsearch(location);

    // Yelp.search(location).then((cafeList) => {
    //   try {
    //     // Getting business detail from Yelp for each business
    //     getDetails(cafeList)
    //       .then((detailedCafes) => sortCafes(detailedCafes))
    //       .then((sortedCafes) => {
    //         setIsLoading(false);
    //         setCafes(sortedCafes);
    //       });
    //   } catch (detailError) {
    //     setIsLoading(false);
    //     console.log(detailError);
    //   }
    // });
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
      {/* Conditional loading */}
      {isLoading && <LoadingAnimation />}
    </div>
  );
};

export default App;
