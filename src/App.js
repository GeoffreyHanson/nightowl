import React, { useState } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import './App.css';

function App() {
  const [cafes, setCafes] = useState([
    {
      id: 1,
      name: 'Spyhouse',
      distance: 2,
      close: '11:00pm',
    },
    {
      id: 2,
      name: 'Dogwood',
      distance: 1,
      close: '8:00pm',
    },
  ]);

  // const cafes = [
  //   {
  //     id: 1,
  //     name: 'Spyhouse',
  //     distance: 2,
  //     close: '11:00pm',
  //   },
  //   {
  //     id: 2,
  //     name: 'Dogwood',
  //     distance: 1,
  //     close: '8:00pm',
  //   },
  // ];
  return (
    <div className="App">
      <Title />
      <SearchBar />
      <CafeList cafes={cafes} />
    </div>
  );
}

export default App;
