import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// Button that brings in searches
const YelpFetch = () => {
  const [locations, setLocations] = useState(null);

  useEffect(async () => {
    const response = await fetch('URL');
    const data = await response.json();
    const cafes = data.results;
    setLocations(cafes);
  }, []);

  return (
    <button type="button" onClick={() => setLocations()} />
  );
};
