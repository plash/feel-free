import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import Feed from "../feed";
import Friends from "../friends";
import Notifications from "../notifications";
import Search from "../search";
import Profile from "../profile";

export default (Home = createBottomTabNavigator(
  {
    Feed: Feed,
    Search: Search,
    Friends: Friends,
    Notifications: Notifications,
    Profile: Profile
  },
  {
    animationEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
));
