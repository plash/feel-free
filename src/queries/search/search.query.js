import { graphql } from "react-apollo";

import * as searchQuery from "./Search";

export const search = graphql(searchQuery.searchUsers, {
  props: ({ mutate }) => ({
    users: filter =>
      mutate({
        variables: { filter }
      })
  })
});
