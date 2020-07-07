const apiKey = process.env.REACT_APP_YELP_API_KEY;
const authorization = { headers: { Authorization: `Bearer ${apiKey}` } };

// Search for businesses first, then re-search each business for hours
const Yelp = {
  async search(location) {
    // Coffee or coffee shop?
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=${location}`;

    try {
      const response = await fetch(endpoint, authorization);
      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            name: business.name,
            distance: business.distance,
          }));
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
