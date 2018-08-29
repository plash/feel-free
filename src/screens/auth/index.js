import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { Button } from "react-native-elements";

var authImages = [
  { imageSource: require("../../assets/img/Login_screen_1.png") },
  { imageSource: require("../../assets/img/Login_screen_2.png") },
  { imageSource: require("../../assets/img/Login_screen_3.png") }
];

class Auth extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: "rgb(0,217,158)"
  };
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }
  _renderItem({ item, index }) {
    return <Image source={item.imageSource} style={stylesItem.image} />;
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onLogin = () => {
    this.props.navigation.navigate("Login");
  };

  onRegister = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    return (
      <SafeAreaView style={stylesItem.mainContainer}>
        <View style={stylesItem.container}>
          <Carousel
            ref={c => (this._slider1Ref = c)}
            data={authImages}
            renderItem={this._renderItem}
            sliderWidth={imageSize}
            itemWidth={imageSize}
            onSnapToItem={index => this.setState({ activeSlide: index })}
          />
          <Pagination
            dotsLength={authImages.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{ backgroundColor: "#fff" }}
            dotStyle={{
              width: 5,
              height: 5,
              marginHorizontal: 4,
              backgroundColor: "#000"
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <TouchableOpacity onPress={this.onLogin}>
          <Button
            title="Login"
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            raised
            textStyle={{ fontSize: 20 }}
            buttonStyle={stylesItem.buttonStyle}
            containerStyle={{ marginVertical: 10, width: 200 }}
            onPress={this.onLogin}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onRegister}>
          <Button
            title="Register"
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            raised
            textStyle={{ fontSize: 20 }}
            buttonStyle={stylesItem.buttonStyle}
            containerStyle={{ marginVertical: 10, width: 200 }}
            onPress={this.onRegister}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Auth;

const { width, height } = Dimensions.get("window");
const imageSize = width - 30;

const stylesItem = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Dimensions.get("screen").height * 0.05
  },
  image: {
    width: imageSize,
    height: imageSize + 150
  },
  buttonStyle: {
    backgroundColor: "rgba(111, 202, 186, 1)",
    borderRadius: 20,
    marginTop: 10,
    width: imageSize
  }
});
