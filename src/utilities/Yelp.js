const apiKey = process.env.REACT_APP_YELP_API_KEY;
const authorization = { headers: { Authorization: `Bearer ${apiKey}` } };

// Search for businesses first, then re-search each business for hours
const Yelp = {

  async search(location) {
    // Coffee or coffee shop?
    // TEMP
    // const location = 'minneapolis';
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=${location}&limit=10`;

    try {
      // Fetching response
      const response = await fetch(endpoint, authorization);

      // If response returns
      if (response.ok) {
        // turn it into json
        const jsonResponse = await response.json();

        // If there are businesses in the response,
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            name: business.name,
            distance: business.distance,
          }));
        }
      }
      // returns an array of businesses
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async details(cafeId) {
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${cafeId}`;
    // TEMP: Too many requests
    const currentDay = 0;

    try {
      const response = await fetch(endpoint, authorization);
      if (response.ok) {
        const jsonResponse = await response.json();

        if (jsonResponse.hours) {
          // const currentDay = new Date().getDay();
          const dayDetails = jsonResponse.hours[0].open[currentDay];

          const details = {
            overnight: dayDetails.is_overnight,
            closingTime: dayDetails.end,
          };
          return details;
        }
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default Yelp;
