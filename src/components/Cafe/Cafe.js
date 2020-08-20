import React from 'react';
import PropTypes from 'prop-types';
import convertTime from '../../utilities/convertTime';

// TODO: Destructure props in argument when finalized
const Cafe = ({ cafe: { name, distance, closingTime } }) => {
  const formattedClosing = convertTime(closingTime);

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
      <td>{formattedClosing}</td>
    </tr>
  );
};


Cafe.propTypes = {
  cafe: PropTypes.shape({
    name: PropTypes.string,
    distance: PropTypes.number,
    closingTime: PropTypes.string,
  }),
};

Cafe.defaultProps = {
  cafe: PropTypes.shape({
    name: 'Name of Cafe',
    distance: 0,
    closingTime: '0000',
  }),
};

export default Cafe;
