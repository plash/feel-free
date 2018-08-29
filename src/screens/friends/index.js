import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default class Friends extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="people" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View>
        <Text> Friends </Text>
      </View>
    );
  }
}
