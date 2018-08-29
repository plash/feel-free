import React, { Component } from "react";
import { Text, View } from "react-native";
import { Query } from "react-apollo";

import { searchQuery } from "../queries/search/Search";

export default class SearchResults extends Component {
  render() {
    console.log(this.props);
    return (
      <Query
        query={searchQuery}
        variables={{
          filter: this.props.filter
        }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, data, fetchMore }) => {
          console.log(data);
        }}
      </Query>
    );
  }
}
