import React from "react";
import { View, TextInput } from "react-native";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

import AuthLoading from "../screens/root/AuthLoading";
import Root from "../screens/root/Root";
import Auth from "../screens/auth";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Home from "../screens/home";
import SearchHeader from "../components/SearchHeader";
import { Icon, SearchBar } from "react-native-elements";

const AppStack = createStackNavigator(
  { Home: Home },
  {
    navigationOptions: {
      header: <SearchHeader />
    }
  }
);
const AuthStack = createStackNavigator(
  {
    Root: Root,
    Main: Auth,
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "Root"
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
