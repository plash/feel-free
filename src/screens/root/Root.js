import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";

var backgroundImage = require("../../assets/img/dribble.png");
const { width, height } = Dimensions.get("window");

class Root extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: "rgb(0,217,158)"
  };

  onWelcomeButtonPress = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <ImageBackground style={styles.imageBox} source={backgroundImage}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.welcome}>Welcome to FeelFree.</Text>
            <Text style={styles.welcome}>Connect anyone from anywhere.</Text>
          </View>
          <TouchableOpacity onPress={this.onWelcomeButtonPress}>
            <Button
              title="Get Start"
              onPress={this.onWelcomeButtonPress}
              titleStyle={{ fontWeight: "bold", fontSize: 18 }}
              buttonStyle={{
                backgroundColor: "rgb(0,217,158)",
                borderWidth: 0,
                borderColor: "transparent",
                borderRadius: 20
              }}
              containerStyle={{ marginVertical: 10, height: 40, width: 200 }}
              icon={{ name: "rowing", size: 25 }}
              iconLeft
              iconContainerStyle={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Root;

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.5,
    width: width * 0.9
  },
  imageBox: {
    flex: 1,
    alignItems: "center",
    width: width,
    height: height,
    justifyContent: "center"
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    marginBottom: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: "center"
  }
});
