import { AsyncStorage } from "react-native";

export const setUserToken = async token => {
  try {
    await AsyncStorage.setItem("userToken", token);
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};
