import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Animal from "../screens/animal";
import Color from "../screens/color";
import Flag from "../screens/flag";
import Shape from "../screens/shape";
import Number from "../screens/number";
import Play from "../screens/play";
import Header from "../components/header";
import Login from "../screens/login";;
import Sign from "../screens/SignUp";
import Password from "../screens/ForgotPassword";

import React from "react";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },

  Animal: {
    screen: Animal,
  },

  Color: {
    screen: Color,
  },
  Flag: {
    screen: Flag,
  },
  Number:{
    screen: Number,
  },
  Shape: {
    screen: Shape,
  },
  Play: {
    screen: Play,
  },
  Login:{
    screen: Login,
  },
  SignUp:{
    screen:Sign,
  },
  Password:{
    screen:Password,
  },
 
 
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "white", height: 60 },
  },
});

export default HomeStack;
