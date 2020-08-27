import React from 'react';
import PropTypes from 'prop-types';
import convertTime from '../../utilities/convertTime';
import './Cafe.module.css';

// TODO: Destructure props in argument when finalized
const Cafe = ({
  cafe: {
    id, name, distance, closingTime,
  },
}) => {
  // Constructing the href for each cafe name.
  const url = `https://www.yelp.com/biz/${id}`;

  // Converting from 24 hour to 12 hour time.
  const formattedClosing = convertTime(closingTime);

  // Converting to miles
  const distanceMiles = (distance * 0.000621371);
  // Rounding to two decimal places
  const distanceShortened = (Math.round(distanceMiles * 100)) / 100;

  return (
    <tr>
      <td>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </td>
      <td>{distanceShortened}</td>
      <td>{formattedClosing}</td>
    </tr>
  );
};


Cafe.propTypes = {
  cafe: PropTypes.shape({
    id: PropTypes.string,
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
