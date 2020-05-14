import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import RNExitApp from 'react-native-exit-app';

import { Audio } from "expo-av";

const xyloSounds = {
  one: require("../assets/Audio/AnimalVideo/ring.mp3"),
};

class Finish extends React.Component {
  constructor(props) {
    super(props);
  }
  
  PlaySound = async (note) => {
    const soundObject = new Audio.Sound();

    try {
      let source = xyloSounds[note];
      // let source = require('./assets/note1.wav')
      await soundObject.loadAsync(source);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  Play = () => {
    this.props.navigation.navigate("listenGame");
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.PlaySound("one")}>
          <ImageBackground
            source={require("../assets/logo/time.png")}
            resizeMode="stretch"
            style={styles.container}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginLeft:-100,
    width: "100%",
    height: "100%",
  },
  
});

//RNExitApp.exitApp();

export default Finish;
