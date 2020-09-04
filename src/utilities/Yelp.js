import { GraphQLClient, gql } from 'graphql-request';
// import query from './YelpGQL';

const apiKey = process.env.REACT_APP_YELP_API_KEY;
const authorization = { headers: { Authorization: `Bearer ${apiKey}` } };

// Searching the Yelp REST API
const Yelp = {

  // Searching for business based on location
  async search(location) {
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

  // Searching for details on businesses based on the current day
  async details(cafeId) {
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${cafeId}`;
    const currentDay = new Date().getDay();


    try {
      const response = await fetch(endpoint, authorization);
      if (response.ok) {
        const jsonResponse = await response.json();

        if (jsonResponse.hours) {
          let dayDetails = jsonResponse.hours[0].open[currentDay];

          // Handling closed cafes
          if (dayDetails === undefined) {
            dayDetails = {
              is_overnight: false,
            };
          }

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

  async gqlsearch(location) {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = `${corsProxy}https://api.yelp.com/v3/graphql`;

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/graphql',
        'Accept-Language': 'en-US',
      },
    });

    const query = gql`
    {
      search (
        term: "coffee",
        location: "Minneapolis",
        limit: 3,
      ) {
        business {
          id
          name
          hours {
            open {
              is_overnight
              end
            }
          }
        }
      }
    }`;

    const data = await graphQLClient.request(query);
    const jsonData = await data.json();
    console.log(jsonData);
    // return jsonData;
  },
};

export default Yelp;
