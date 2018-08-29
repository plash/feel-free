import gql from "graphql-tag";
import { Query } from "react-apollo";

export const searchQuery = gql`
  query users($filter: String!) {
    users(filter: $filter) {
      id
      name
    }
  }
`;

export const searchUsers = ({ filter }) => (
  <Query query={searchQuery} variables={{ filter }}>
    {({ loading, error, data }) => {
      return data.users;
    }}
  </Query>
);
