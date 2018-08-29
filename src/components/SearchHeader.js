import React, { Component } from "react";
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

import { SafeAreaView } from "react-navigation";

import { Icon, SearchBar } from "react-native-elements";

import { compose } from "react-apollo";

import SearchResults from "./SearchResults";

class SearchHeader extends Component {
  constructor() {
    super();
    this.state = {
      height: null,
      animating: false,
      filter: "",
      results: []
    };

    this.measureView = this.measureView.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.measureView();
    }, 0);
  }

  measureView() {
    console.log("measuring view");
    this.refs.container.measure((a, b, w, h, x, y) => {
      this.setState({ height: new Animated.Value(h), original: h });
    });
  }

  hide() {
    if (this.state.animating) {
      return;
    }
    console.log("animating");

    this.setState({ animating: true });
    Animated.timing(this.state.height, { toValue: 0 }).start();
  }

  show() {
    if (!this.state.animating) {
      return;
    }
    console.log("animating");
    this.setState({ animating: false });
    Animated.timing(this.state.height, {
      toValue: this.state.original
    }).start();
  }

  search = filter => {
    this.setState({
      filter: filter
    });
  };

  clearSearch = () => {
    this.setState({
      results: []
    });
  };

  renderSearchResults() {
    const results = [];
  }

  render() {
    const { height } = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View ref="container" style={styles.container}>
          <Icon
            name="camera-enhance"
            iconStyle={{ marginLeft: 5 }}
            color="#fff"
          />
          <SearchBar
            showLoading
            round
            lightTheme
            searchIcon={{ size: 24 }}
            containerStyle={{
              borderTopWidth: 0,
              borderBottomWidth: 0,
              backgroundColor: "rgba(111, 202, 186, 1)",
              width: Dimensions.get("screen").width / 1.2
            }}
            inputStyle={{
              backgroundColor: "#fff"
            }}
            onChangeText={filter => {
              this.setState({
                filter: filter
              });
            }}
            onClear={this.clearSearch}
            placeholder="Type Here..."
          />
          <Icon name="message" iconStyle={{ marginRight: 5 }} color="#fff" />
        </View>
        {this.state.filter !== "" ? (
          <SearchResults filter={this.state.filter} />
        ) : null}
      </SafeAreaView>
    );
  }
}

export default SearchHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgba(111, 202, 186, 1)"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    backgroundColor: "rgba(111, 202, 186, 1)"
  }
});
