import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../components/theme";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get("screen").height * 0.1,
    backgroundColor: "#fff"
  },
  inputContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40
  },
  greeting: {
    marginTop: 20,
    fontSize: 20
  },
  greeting2: {
    color: "#666",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  button: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: "rgb(0,217,158)",
    borderRadius: 20,
    marginTop: 10,
    width: Dimensions.get("window").width * 0.8
  },
  buttonText: {
    color: colors.primary,
    fontSize: 22,
    letterSpacing: 0.5
  },
  activityIndicator: {
    transform: [{ scale: 0.7 }],
    marginTop: 3.5,
    marginLeft: 5
  }
});
