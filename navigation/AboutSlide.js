import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Out from "../screens/out";
import Header from "../components/header";
import React from "react";
const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle : () => <Header navigation = {navigation}/>,
      }
    }
  },

};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 50 },
  },
});

export default AboutStack;
