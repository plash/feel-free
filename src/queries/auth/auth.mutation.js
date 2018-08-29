import { graphql } from "react-apollo";

import * as authQuery from "./Auth";

export const login = graphql(authQuery.loginQuery, {
  props: ({ mutate }) => ({
    login: user =>
      mutate({
        variables: { user }
      })
  })
});

export const register = graphql(authQuery.registerQuery, {
  props: ({ mutate }) => ({
    register: user =>
      mutate({
        variables: { user }
      })
  })
});
