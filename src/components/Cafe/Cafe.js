import React, { useState } from 'react';
import Yelp from '../../utilities/Yelp';
// import PropTypes from 'prop-types';

// TODO: Destructure props in argument when finalized
const Cafe = (props) => {
  const { cafe } = props;
  const { name, distance, closingTime } = cafe;
  // const [thisCafe, setThisCafe] = useState([cafe]);
  // console.log(name);
  // console.log(closingTime);

  // Yelp.details(cafe.id).then((details) => {
  //   cafe.overnight = details.overnight;
  //   cafe.closingTime = details.closingTime;
  //   console.log(cafe);
  //   setThisCafe(cafe);
  // });

  // Converting to miles
  const distanceMiles = (distance * 0.000621371);
  // Rounding to two decimal places
  const distanceShortened = (Math.round(distanceMiles * 100)) / 100;

  return (
    <tr>
      <td>{name}</td>
      <td>
        {distanceShortened}
      </td>
      <td>{closingTime}</td>
    </tr>
  );
};


// Cafe.propTypes = {
//   // key: PropTypes.number,
//   cafe: PropTypes.shape({
//     name: PropTypes.string,
//     distance: PropTypes.number,
//     close: PropTypes.string,
//   }),
// };

// Cafe.defaultProps = {
//   // key: PropTypes.number,
//   cafe: PropTypes.shape({
//     name: 'Name of Cafe',
//     distance: 0,
//     close: '00:00',
//   }),
// };

export default Cafe;
