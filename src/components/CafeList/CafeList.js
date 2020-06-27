import React from 'react';
import Cafe from '../Cafe/Cafe';
import './CafeList.module.css';

// Displaying a list of cafe names
// The array fed to this component should already be sorted
const CafeList = () => {
  const cafes = [
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
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Distance</th>
          <th>Close</th>
        </tr>
      </thead>
      <tbody>
        {cafes.map((cafe) => <Cafe cafe={cafe} key={cafe.id} />)}
      </tbody>
    </table>
  );
};

export default CafeList;
