import gql from 'graphql-request';

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
}
`;

export default query;
