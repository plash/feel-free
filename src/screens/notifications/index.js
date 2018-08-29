import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default class Notification extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="notifications" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View>
        <Text> Notification </Text>
      </View>
    );
  }
}
