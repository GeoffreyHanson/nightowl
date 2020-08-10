// Converts closing time from 24 hour to 12 hour
const convertTime = (twentyfourHour) => {
  if (twentyfourHour === undefined) {
    return twentyfourHour;
  }

  // Grabbing just the hours and minutes from e.g. '2400', then parsing
  let hours = parseInt(twentyfourHour.slice(0, 2), 10); // '24'

  const minutes = twentyfourHour.slice(2); // '00'

  const suffix = hours >= 12 ? 'PM' : 'AM';

  // Converting hours
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Alternative mathematical conversion.
  // hours = ((hours + 11) % 12) + 1;

  const convertedTime = `${hours}:${minutes} ${suffix}`;

  return convertedTime;
};

export default convertTime;
