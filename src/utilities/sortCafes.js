/* Moving cafes open overnight to the top and cafes without hours to the bottom,
   with the rest in between. */

const sortCafes = (cafesToSort) => {
  const overnightCafes = [];
  const midnightCafes = [];
  const remainingCafes = [];
  const cafesWithoutHours = [];

  // Pushing to relevent arrays based on criteria
  cafesToSort.forEach((cafe) => {
    if (cafe.closingTime === undefined) {
      cafesWithoutHours.push(cafe);
    } else if (cafe.overnight) {
      overnightCafes.push(cafe);
    } else if (cafe.closingTime < 1) {
      // Handling shops that close at midnight '0000'
      midnightCafes.push(cafe);
    } else {
      remainingCafes.push(cafe);
    }
  });

  // Sort each array from latest open
  const sortedOvernight = overnightCafes.sort((a, b) => b.closingTime - a.closingTime);
  const sortedRemaining = remainingCafes.sort((a, b) => b.closingTime - a.closingTime);

  // Combinding into a new array
  const combinedCafes = [
    ...sortedOvernight,
    ...midnightCafes,
    ...sortedRemaining,
    ...cafesWithoutHours,
  ];

  return combinedCafes;
};

export default sortCafes;
