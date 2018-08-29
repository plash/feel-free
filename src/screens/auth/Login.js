import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { Button } from "react-native-elements";

import BackHeader from "../../components/BackHeader";
import Input from "../../components/Input";
import { styles } from "./styles";

import { userValidations } from "./validations";

class Login extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: "rgb(0,217,158)",
    headerStyle: {
      backgroundColor: "#fff"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      errors: {}
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  onLogin = () => {
    const { errors, isValid } = userValidations.validateLoginInput(this.state);
    if (isValid) {
      this.setState({
        isLoading: true
      });
    } else {
      this.setState({
        errors
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
        <Text style={[styles.greeting]}>Welcome back,</Text>
        <Text style={[styles.greeting2]}>log in to continue</Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              type="email"
              onChangeText={this.onChangeText}
              value={this.state.email}
              errors={this.state.errors.email}
            />
            <Input
              placeholder="Password"
              type="password"
              onChangeText={this.onChangeText}
              value={this.state.password}
              errors={this.state.errors.password}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.button}>
              {this.state.isLoading ? (
                <Button
                  raised
                  textStyle={{ fontSize: 20 }}
                  buttonStyle={styles.buttonStyle}
                  containerStyle={{
                    marginVertical: 10,
                    width: 200
                  }}
                  loading
                />
              ) : (
                <Button
                  title="Login"
                  raised
                  textStyle={{ fontSize: 20 }}
                  buttonStyle={styles.buttonStyle}
                  containerStyle={{
                    marginVertical: 10,
                    width: 200
                  }}
                  onPress={this.onLogin}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
