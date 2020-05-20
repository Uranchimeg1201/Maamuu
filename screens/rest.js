import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import RNExitApp from "react-native-exit-app";

import { Audio } from "expo-av";

const Sounds = {
  one: require("../assets/Audio/AnimalVideo/old-fashioned-school-bell-daniel_simon.mp3"),
};

class Finish extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.PlaySound('one');
  }
  PlaySound = async (note) => {
    const soundObject = new Audio.Sound();
    try {
      let source = Sounds[note];
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

  render() {
    return (
      <View style={styles.container}>
        
          <ImageBackground
            source={require("../assets/logo/time.png")}
            resizeMode="stretch"
            style={styles.container}
          ></ImageBackground>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

//RNExitApp.exitApp();

export default Finish;
