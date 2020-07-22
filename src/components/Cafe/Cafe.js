import React from 'react';
// import PropTypes from 'prop-types';

// TODO: Destructure props in argument when finalized
const Cafe = (props) => {
  const { cafe } = props;
  const { name, distance, closingTime } = cafe;
  // console.log(name);
  // console.log(closingTime);

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
