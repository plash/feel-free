import React, { Component } from "react";
import { Dimensions } from "react-native";
import { Icon } from "react-native-elements";

export default class BackHeader extends Component {
  render() {
    return (
      <Icon
        name="arrow-back"
        color="rgb(0,217,158)"
        onPress={this.props.onPress}
        size={25}
        iconStyle={{
          position: "relative",
          left: -(Dimensions.get("window").width * 0.45)
        }}
      />
    );
  }
}
