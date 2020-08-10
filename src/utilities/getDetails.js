import Yelp from './Yelp';

// Getting overnight details & closing times from Yelp
function getDetails(cafesToDetail) {
  // Waiting to return until all promises are returned
  return Promise.all(cafesToDetail.map((cafe) => Yelp.details(cafe.id)
    .then((cafeDetails) => {
      // Adding the retrieved details to the cafe object
      const detailedCafe = {
        ...cafe,
        closingTime: cafeDetails.closingTime,
        overnight: cafeDetails.overnight,
      };
      return detailedCafe;
    })));
}

export default getDetails;
