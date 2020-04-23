import { createStackNavigator } from "react-navigation-stack";
import Admin from "../screens/login";
import Out from "../screens/out";
import Header from "../components/header";
import React from "react";
const screens = {
  Admin: {
    screen: Admin,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle : () => <Header navigation = {navigation}/>,
      }
    }
  },
 

};

const AboutStack = createStackNavigator(screens, {
 
});

export default AboutStack;
