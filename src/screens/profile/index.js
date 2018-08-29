import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    );
  }
}
