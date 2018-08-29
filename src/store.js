import { createStackNavigator } from "react-navigation";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider, connect } from "react-redux";
import React from "react";

import AppNavigator from "./components/AppNavigator";
import rootReducer from "./reducers";

const initialState = {};

const navReducer = createNavigationReducer(AppNavigator);

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const reduxMiddleware = createReactNavigationReduxMiddleware("root");
const middleware = [thunk, logger, reduxMiddleware];

const App = reduxifyNavigator(AppNavigator, "root");

const AppWithNavigationState = connect(null)(App);

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
