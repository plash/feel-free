import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import { colors } from "./theme";

export default ({ placeholder, onChangeText, type, errors, ...props }) => (
  <View>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={errors ? styles.errorInput : styles.input}
      placeholder={placeholder}
      placeholderTextColor="#a0a0a0"
      onChangeText={value => onChangeText(type, value)}
      clearButtonMode={"while-editing"}
      {...props}
    />
    {errors ? <Text style={styles.errorMessage}> {errors} </Text> : null}
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 45,
    marginBottom: 15,
    borderBottomWidth: 1,
    fontSize: 16
  },
  errorInput: {
    borderBottomColor: "red",
    height: 45,
    marginBottom: 15,
    borderBottomWidth: 1,
    fontSize: 16
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: "red"
  }
});
