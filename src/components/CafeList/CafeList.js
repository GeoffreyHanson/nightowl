import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cafe from '../Cafe/Cafe';
import Yelp from '../../utilities/Yelp';
import './CafeList.module.css';

// Displaying a list of cafe names
// The array fed to this component should already be sorted
const CafeList = (props) => {
  const { cafes } = props;
  // const [listedCafes, setListedCafes] = useState(cafes);

  // if (cafes.length > 0) {
  //   cafes.forEach((cafe) => {
  //     Yelp.details(cafe.id).then((details) => {
  //       cafe.overnight = details.overnight;
  //       cafe.closingTime = details.closingTime;
  //     });
  //   });
  // }
  // cafes.sort((a, b) => b.closingTime + a.closingTime);
  // console.log(cafes);
  // setCafes(cafes);
  return (

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
};

CafeList.propTypes = {
  cafes: PropTypes.arrayOf(
    PropTypes.shape({
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
