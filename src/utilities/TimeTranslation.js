// Takes 24hour time and converts it into 12hour
// Converts closing time from 24 hour to 12 hour
const TimeTranslation = (twentyfourHour) => {
  if (twentyfourHour === undefined) {
    return twentyfourHour;
  }

  // Grabbing just the hours and minutes from e.g. '2400'
  const hours = twentyfourHour.slice(0, 2);
  const minutes = twentyfourHour.slice(2);

  const suffix = hours >= 12 ? 'PM' : 'AM';

  const twelveHour = hours > 12 ? hours - 12 : hours;

  const translatedTime = `${twelveHour}:${minutes} ${suffix}`;

  return translatedTime;
};

export default TimeTranslation;
