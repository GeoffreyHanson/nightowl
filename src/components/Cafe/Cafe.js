import React from 'react';
import PropTypes from 'prop-types';

const Cafe = (props) => {
  const { cafe } = props;
  const { name, distance, close } = cafe;
  return (
    <tr>
      <td>{name}</td>
      <td>
        {distance}
        mi
      </td>
      <td>{close}</td>
    </tr>
  );
};

export default Cafe;

Cafe.propTypes = {
  // key: PropTypes.number,
  cafe: PropTypes.shape({
    name: PropTypes.string,
    distance: PropTypes.number,
    close: PropTypes.string,
  }),
};

Cafe.defaultProps = {
  // key: PropTypes.number,
  cafe: PropTypes.shape({
    name: 'Name of Cafe',
    distance: 0,
    close: '00:00',
  }),
};
