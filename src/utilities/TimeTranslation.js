// Takes 24hour time and converts it into 12hour
const TimeTranslation = (twentyfourHour) => {
  if (twentyfourHour === undefined) {
    return twentyfourHour;
  }

  const trimmed = twentyfourHour.slice(0, 2);

  const suffix = trimmed >= 12 ? 'PM' : 'AM';

  const twelveHour = (((trimmed + 11) % 12) + 1) + suffix;

  console.log(twelveHour);
  return twelveHour;

  // const date = new Date(twentyfourHour);
  // const options = {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   hour12: true,
  // };

  // const twelveHour = date.toLocaleString('en-US', options);

  // return twelveHour;
};

export default TimeTranslation;
