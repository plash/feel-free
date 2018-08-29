import React, { Component } from "react";
import { AsynchStorage } from "react-native";
import AppNavigator from "./components/AppNavigator";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";

import { WaveIndicator } from "./components/indicator/WaveIndicator";

//import store from "./store";

const httpLink = new HttpLink({ uri: "http://localhost:4000" });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from Async storage if it exists
//   const userToken = AsyncStorage.getItem("userToken");
//   console.log(userToken);
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: userToken ? `Bearer ${userToken}` : null
//     }
//   };
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  onError: e => {
    console.log(e.graphQLErrors);
  } // Works
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    SplashScreen.hide();
    this.setState({
      loading: false
    });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
