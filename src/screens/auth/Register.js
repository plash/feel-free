import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { compose } from "react-apollo";

import { register } from "../../queries/auth/auth.mutation";

import { setUserToken } from "../../common/setToken";

import { Button } from "react-native-elements";

import BackHeader from "../../components/BackHeader";
import Input from "../../components/Input";
import { colors } from "../../components/theme";
import { styles } from "./styles";
import { userValidations } from "./validations";

class Register extends Component {
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
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
      errors: {}
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
  };

  onChangeText = (key, value) => {
    console.log(key);
    this.setState({
      [key]: value
    });
  };

  onRegister = () => {
    const { errors, isValid } = userValidations.validateRegisterInput(
      this.state
    );
    if (isValid) {
      //   this.setState({
      //     isLoading: false
      //   });
      const { email, password, name, username } = this.state;
      this.props
        .register({ email, password, name, username })
        .then(({ data: { register: user } }) => {
          setUserToken(user.token);
          this.props.navigation.navigate("Home");
        })
        .catch(error => {
          console.log(error);
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
        <Text style={[styles.greeting]}>New to FeelFree?</Text>
        <Text style={[styles.greeting2]}>Register to continue</Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="User Name"
              type="username"
              onChangeText={this.onChangeText}
              value={this.state.username}
              errors={this.state.errors.username}
            />
            <Input
              placeholder="First Name"
              type="name"
              onChangeText={this.onChangeText}
              value={this.state.name}
              errors={this.state.errors.name}
            />
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
            <Input
              placeholder="Confirm Password"
              type="confirmPassword"
              onChangeText={this.onChangeText}
              value={this.state.confirmPassword}
              errors={this.state.errors.confirmPassword}
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
                  title="Register"
                  raised
                  textStyle={{ fontSize: 20 }}
                  buttonStyle={styles.buttonStyle}
                  containerStyle={{
                    marginVertical: 10,
                    width: 200
                  }}
                  onPress={this.onRegister}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default compose(register)(Register);
