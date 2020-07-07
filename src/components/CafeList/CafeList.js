import React from 'react';
import Cafe from '../Cafe/Cafe';
import './CafeList.module.css';

// Displaying a list of cafe names
// The array fed to this component should already be sorted
const CafeList = ({ cafes }) => (
// const { cafes } = props;
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Distance (mi)</th>
        <th>Close</th>
      </tr>
    </thead>
    <tbody>
      {cafes.map((cafe) => <Cafe cafe={cafe} key={cafe.id} />)}
    </tbody>
  </table>
);
export default CafeList;
