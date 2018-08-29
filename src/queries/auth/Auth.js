import gql from "graphql-tag";

export const registerQuery = gql`
  mutation register($user: RegisterInput!) {
    register(user: $user) {
      token
      user {
        id
      }
    }
  }
`;

export const loginQuery = gql`
  mutation login($user: LoginInput!) {
    login(user: $user) {
      token
      user {
        id
      }
    }
  }
`;
