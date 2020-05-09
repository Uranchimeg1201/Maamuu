import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Animal from "../screens/animal";
import Color from "../screens/color";
import Flag from "../screens/flag";
import Shape from "../screens/shape";
import Number from "../screens/number";
import Play from "../screens/play";
import Header from "../components/header";
import Login from "../screens/login";
import Sign from "../screens/SignUp";
import Password from "../screens/ForgotPassword";
import Video from "../screens/video";
import animalGame from "../screens/animalGame";
import numberGame from "../screens/numberGame";
import listenGame from "../screens/listenGame";
import rest from "../screens/rest";
import admin from "../screens/admin";
import addNewQuestions from "../components/addNewQuestions";
import menuBar from "../components/menuBar";
//import flagGame from '../components/flagGame';

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
    navigationOptions:{
      title: 'Амьтан'
    }
  },

  Color: {
    screen: Color,
    navigationOptions:{
      title: 'Өнгө'
    }
  },
  Flag: {
    screen: Flag,
    navigationOptions:{
      title: 'Улс орон'
    }
  },
  Number: {
    screen: Number,
    navigationOptions:{
      title: 'Тоо'
    }
  },
  Shape: {
    screen: Shape,
    navigationOptions:{
      title: 'Дүрс'
    }
  },
  Play: {
    screen: Play,
    navigationOptions:{
      title: 'Тоглоом'
    }
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: Sign,
  },
  Password: {
    screen: Password,
  },
  Video: {
    screen: Video,
  },
  numberGame: {
    screen: numberGame,
    navigationOptions:{
      title: 'Тоогоо бодоцгооё'
    }
  },

  animalGame: {
    screen: animalGame,
    navigationOptions:{
      title: 'Хараад сонгоорой'
    }
  },
  listenGame:{
    screen: listenGame,
    navigationOptions:{
      title: 'Сонсоод сонгоорой'
    }
  },
  rest:{
    screen: rest,
    navigationOptions:{
      title: 'Амрах цаг боллоо!'
    }
  },
  admin:{
    screen: admin,
  },
  addNewQuestions:{
    screen: addNewQuestions,
  },
  menuBar:{
    screen: menuBar,
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "white", height: 60 },
  },
});

export default HomeStack;
