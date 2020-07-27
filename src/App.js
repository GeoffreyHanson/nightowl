import React, { useState, useEffect } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import Yelp from './utilities/Yelp';
import './App.css';

const App = () => {
  const [cafes, setCafes] = useState([]);


  // Should update when cafes[0].closingTime changes
  // if cafes[0].closingTime, then
  // function handleChange() {
  //   // if (cafes[0].closingTime) {
  //   const updatedCafes = cafes.map((cafe) => {
  //     cafe.overnight = false;
  //     cafe.closingTime = '1200';
  //     return cafe;
  //   });
  //   console.log('Updated...');
  //   console.log(updatedCafes);
  //   // Currently causes an infinite loop...
  //   setCafes(updatedCafes);
  //   // }
  // }


  // useEffect(() => {
  //   if (cafes.length !== 0) {
  //     const updatedCafes = cafes.map((cafe) => {
  //       cafe.overnight = false;
  //       cafe.closingTime = '1200';
  //       return cafe;
  //     });
  //     console.log('Updated...');
  //     console.log(updatedCafes);
  //     // Currently causes an infinite loop...
  //     setCafes(updatedCafes);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (cafes.length !== 0) {
  //     cafes.map((cafe) => {
  //       Yelp.details(cafe.id).then((details) => {
  //         cafe.overnight = details.overnight;
  //         cafe.closingTime = details.closingTime;
  //       });
  //     });
  //     // console.log(updatedCafes);
  //     console.log(cafes);
  //     console.log('Updated');
  //   }
  // }, [cafes]);


  const searchYelp = (location) => {
    Yelp.search(location).then((cafeList) => {
      const cafeArr = [];
      cafeList.forEach((cafe) => {
        Yelp.details(cafe.id).then((details) => {
          // cafe.overnight = details.overnight;
          // cafe.closingTime = details.closingTime;
          cafe = {
            ...cafe,
            overnight: details.overnight,
            closingTime: details.closingTime,
          };
          // console.dir(cafeContainer);
          cafeArr.push(cafe);
          // return cafe;
          // setCafes(where: cafe.id)
          // How do I add container to the cafe
        });
        // .then((result) => result);
        // return container;
        // console.dir(detailedCafe);
      });
      console.table(cafeArr);
      // console.log(cafeList);
      // setCafes(cafeList);
    });
    // For each cafe in cafes
  };


  return (
    <div className="App">
      <Title />
      <SearchBar searchYelp={searchYelp} />
      <CafeList
        cafes={cafes}
        setCafes={setCafes}
      />
    </div>
  );
};

export default App;
