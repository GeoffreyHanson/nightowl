import React from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CafeList from './components/CafeList/CafeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <SearchBar className="SearchBar" />
      <CafeList />
    </div>
  );
}

export default App;
