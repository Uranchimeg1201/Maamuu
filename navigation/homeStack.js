import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Animal from "../screens/animal";
import Color from "../screens/color";
import Flag from "../screens/flag";
import Header from "../components/header";
import React from 'react';
const screens = {
  Home: {   
    screen: Home,
    navigationOptions: ({navigation}) => {
        return {
          headerTitle : () => <Header navigation = {navigation}/>,
        }
      }
    },
  

  Animal: {
    screen: Animal,
  },

  Color: {
    screen: Color,
  },
  Flag :{
      screen: Flag,
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {

    headerStyle: { backgroundColor: "rgb(200,255, 255)",  height: 60},
  },
});

export default HomeStack;
