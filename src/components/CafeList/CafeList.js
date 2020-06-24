import React from 'react';

// Displaying a list of cafe names
const CafeList = (props) => {
  const { children } = props;
  return (
    <ul className="CafeList">
      <li>
        {children}
      </li>
    </ul>
  );
};

export default CafeList;
