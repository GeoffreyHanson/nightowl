import React from 'react';
import PropTypes from 'prop-types';
import Cafe from '../Cafe/Cafe';
import './CafeList.module.css';

// Displaying a list of cafe names
// The array fed to this component should already be sorted
const CafeList = ({ cafes }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Distance (mi)</th>
        <th>Close</th>
      </tr>
    </thead>
    <tbody>
      {cafes.map((cafe) => (
        <Cafe
          cafe={cafe}
          key={cafe.id}
        />
      ))}
    </tbody>
  </table>
);

CafeList.propTypes = {
  cafes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      distance: PropTypes.number,
      closingTime: PropTypes.string,
    }),
  ),
};

CafeList.defaultProps = {
  cafes: [],
};

export default CafeList;
